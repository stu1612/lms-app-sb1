// npm
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faPenToSquare,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
// files
import { ModalContext } from "../contexts/ModalContext";
import DeleteCategory from "./forms/DeleteCategory";
import UpdateCategory from "./forms/UpdateCategory";

export default function AdminCategoryItem({ item }) {
  // global state
  const { setIsModal } = useContext(ModalContext);

  // properties
  const { title, description } = item;
  return (
    <div id="admin-item" className="admin-item">
      <div className="content">
        <h3>{title}</h3>
      </div>
      <div className="actions">
        <p>{description}</p>
        <div className="icons">
          <FontAwesomeIcon icon={faBookOpenReader} className="icon open" />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="icon edit"
            onClick={() => setIsModal(<UpdateCategory item={item} />)}
          />
          <FontAwesomeIcon
            icon={faCircleMinus}
            className="icon delete"
            onClick={() => setIsModal(<DeleteCategory item={item} />)}
          />
        </div>
      </div>
    </div>
  );
}
