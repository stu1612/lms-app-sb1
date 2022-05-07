import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function HomeIcon() {
  return (
    <div className="home-icon">
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
    </div>
  );
}
