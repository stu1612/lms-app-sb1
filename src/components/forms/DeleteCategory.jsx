// files
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import deleteCategoryItem from "../../scripts/deleteCategoryItem";

export default function DeleteCategory({ item }) {
  // global state
  const { setIsModal } = useContext(ModalContext);
  const { courses, setCourses } = useContext(AppContext);

  // properties
  const { id } = item;
  const path = "dashboard/courses/content/";

  function onDelete() {
    deleteCategoryItem(path, id, courses, setCourses);
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
