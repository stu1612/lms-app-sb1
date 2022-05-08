import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faPenToSquare,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminCategoryItem({ item }) {
  const { id, title, description } = item;
  return (
    <div id="admin-item" className="admin-item">
      <div className="content">
        <h3>{title}</h3>
      </div>
      <div className="actions">
        <p>{description}</p>
        <div className="icons">
          <FontAwesomeIcon icon={faBookOpenReader} className="icon open" />
          <FontAwesomeIcon icon={faPenToSquare} className="icon edit" />
          <FontAwesomeIcon icon={faCircleMinus} className="icon delete" />
        </div>
      </div>
    </div>
  );
}
