// npm
import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// files
import { ModalContext } from "../contexts/ModalContext";
import { AppContext } from "../contexts/AppContext";
import { readCollections } from "../firebase/fireStore";
import CreateProject from "../components/forms/CreateProject";
import EmptyItemsMessage from "../components/EmptyItemsMessage";
import Loader from "../components/Loader";
import AdminProjectItem from "../components/AdminProjectItem";

export default function AdminProjects() {
  // global state
  const { setIsModal } = useContext(ModalContext);
  const { projects, setProjects } = useContext(AppContext);

  // local state
  const [status, setStatus] = useState(0);

  // properties
  const location = useLocation();
  const { id, title } = location.state.data;

  const path = `dashboard/courses/content/${id}/content`;

  // Methods
  useEffect(() => {
    async function loadData() {
      const data = await readCollections(path).catch(onFail);

      if (data) onSuccess(data);
    }
    loadData();
  }, [path]);

  function onSuccess(data) {
    setProjects(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the categories. Try again");
    setStatus(2);
  }

  const mappedItems = projects.map((item) => (
    <AdminProjectItem key={item.id} item={item} />
  ));

  // Safeguards
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error </p>;
  return (
    <section id="admin" className="main">
      <div className="admin">
        <h1>Projects for {title}</h1>
        <FontAwesomeIcon
          icon={faCirclePlus}
          onClick={() => setIsModal(<CreateProject path={path} />)}
          className="icon"
        />
      </div>
      <div className="projects">{mappedItems}</div>
      {projects.length === 0 && <EmptyItemsMessage />}
    </section>
  );
}
