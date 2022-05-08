// npm
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// files
import { readCollections } from "../firebase/fireStore";
import Loader from "../components/Loader";
import EmptyItemsMessage from "../components/EmptyItemsMessage";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState(0);

  // properties
  const navigate = useNavigate();
  const { title } = useParams();
  const location = useLocation();

  const routeId = location.state.data.id;

  const path = `dashboard/courses/content/${routeId}/content`;

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
    <ProjectItem key={item.id} item={item} />
  ));

  const Items = projects && mappedItems;
  const NoItems = projects.length === 0 && <EmptyItemsMessage />;

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;

  return (
    <section id="projects" className="main">
      <div className="admin">
        <h2>Welcome to your {title} learning platform material</h2>
      </div>
      <div className="projects">
        {NoItems}
        {Items}
        <button
          className="btn btn-primary"
          onClick={() => navigate(-1)}
          style={{ marginTop: "5rem" }}
        >
          Go back
        </button>
      </div>
    </section>
  );
}
