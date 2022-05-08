// npm
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
// files
import { AppContext } from "../contexts/AppContext";
import { ModalContext } from "../contexts/ModalContext";
import { readCollections } from "../firebase/fireStore";
import AdminCategoryItem from "../components/AdminCategoryItem";
import CreateCategory from "../components/forms/CreateCategory";
import Loader from "../components/Loader";
import EmptyItemsMessage from "../components/EmptyItemsMessage";

export default function AdminCategories() {
  // global state
  const { setIsModal } = useContext(ModalContext);
  const { courses, setCourses } = useContext(AppContext);
  // local state
  const [status, setStatus] = useState(0);

  // Methods
  useEffect(() => {
    async function loadData() {
      const data = await readCollections("dashboard/courses/content/").catch(
        onFail
      );
      if (data) onSuccess(data);
    }
    loadData();
  }, []);

  function onSuccess(data) {
    setCourses(data);
    setStatus(1);
  }

  function onFail(error) {
    console.error(error);
    alert("We cannot load the courses. Try again");
    setStatus(2);
  }

  const mappedItems =
    courses &&
    courses.map((item) => <AdminCategoryItem key={item.id} item={item} />);

  // Safeguards
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error</p>;

  return (
    <section id="admin" className="main">
      <div className="admin">
        <h1>Admin</h1>
        <FontAwesomeIcon
          icon={faCirclePlus}
          onClick={() => setIsModal(<CreateCategory />)}
          className="icon"
        />
      </div>

      <div className="grid">
        {mappedItems}
        {courses.length === 0 && <EmptyItemsMessage />}
      </div>
    </section>
  );
}
