// npm
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// files
import { AuthContext } from "../contexts/AuthContext";
import { readCollections } from "../firebase/fireStore";
import CategoryItem from "../components/CategoryItem";
import EmptyItemsMessage from "../components/EmptyItemsMessage";
import Loader from "../components/Loader";

export default function Dashboard() {
  const navigate = useNavigate();
  const { setUID, uid } = useContext(AuthContext);

  // local state
  const [courses, setCourses] = useState([]);
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
    courses.map((item) => <CategoryItem key={item.id} item={item} />);

  // Safeguards
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error</p>;

  return (
    <section id="dashboard" className="main">
      <div className="admin">
        <h1>Dashboard</h1>
      </div>
      <div className="grid">{courses && mappedItems}</div>
      {courses.length === 0 && <EmptyItemsMessage />}
    </section>
  );
}
