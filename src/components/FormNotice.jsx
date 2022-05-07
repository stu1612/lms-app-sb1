import { Link } from "react-router-dom";

export default function FormNotice({ title, link, btn }) {
  return (
    <div className="form-fields">
      <label>
        <small>{title}</small>
      </label>
      <Link to={link} className="btn btn-primary">
        {btn}
      </Link>
    </div>
  );
}
