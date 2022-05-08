// npm
import { useContext } from "react";
// files
import { ModalContext } from "../contexts/ModalContext";
import UpdateProject from "./forms/UpdateProject";
import DeleteProject from "./forms/DeleteProject";

export default function AdminProjectItem({ item }) {
  // global state
  const { setIsModal } = useContext(ModalContext);

  // properties
  const { subTitle, id, description, linkURL, fileURL } = item;

  const path = `dashboard/courses/content/${id}/content`;

  return (
    <div id="admin-item" className="project-item">
      <div className="content">
        <p>{subTitle}</p>
        <p>{description}</p>
      </div>
      <div className="links">
        <small>LINK: {linkURL}</small>
        <small>FILE: {fileURL}</small>
      </div>
      <div className="buttons">
        <button
          className="btn btn-primary"
          onClick={() => setIsModal(<DeleteProject item={item} />)}
        >
          Delete
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setIsModal(<UpdateProject item={item} />)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
