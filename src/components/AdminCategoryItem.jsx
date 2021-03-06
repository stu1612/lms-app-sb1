// npm
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
  const [data] = useState(item);

  return (
    <div id="admin-item" className="admin-item">
      <div className="content">
        <h3>{title}</h3>
      </div>
      <div className="actions">
        <p>{description}</p>
        <div className="icons">
          <Link to={`/admin/${title}`} state={{ data: data }}>
            <FontAwesomeIcon icon={faBookOpenReader} className="icon open" />
          </Link>
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
