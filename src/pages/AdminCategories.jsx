// npm
import { useContext } from "react";

// files
import CreateCategory from "../components/forms/CreateCategory";
import { ModalContext } from "../contexts/ModalContext";

export default function AdminCategories() {
  const { setIsModal } = useContext(ModalContext);
  return (
    <div>
      <h1>Admin</h1>
      <button onClick={() => setIsModal(<CreateCategory />)}>
        Add new category
      </button>
    </div>
  );
}
