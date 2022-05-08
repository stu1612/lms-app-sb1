// files
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import deleteCategoryItem from "../../scripts/deleteCategoryItem";

export default function DeleteProject({ item }) {
  // global state
  const { setIsModal } = useContext(ModalContext);
  const { projects, setProjects } = useContext(AppContext);

  // properties
  const { id } = item;
  const path = `dashboard/courses/content/${id}/content`;

  function onDelete() {
    deleteCategoryItem(path, id, projects, setProjects);
    setIsModal(null);
  }

  return (
    <div>
      <h2>Are you sure?</h2>
      <p>
        By deleting this item you will permantly lose all your information !
      </p>
      <div>
        <button className="btn btn-primary" onClick={() => onDelete()}>
          Yes, delete
        </button>
        <button className="btn btn-primary" onClick={() => setIsModal(null)}>
          No, keep it
        </button>
      </div>
    </div>
  );
}
