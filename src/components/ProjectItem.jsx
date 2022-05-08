// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProjectItem({ item }) {
  const { subTitle, description, linkURL, fileURL } = item;

  const link = linkURL && (
    <div className="item-link">
      <small>See attached </small>
      <a href={linkURL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faExternalLink} className="icon-link" />
      </a>
    </div>
  );

  const file = fileURL && (
    <div className="item-link">
      <small>See attached </small>
      <a href={fileURL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFile} className="icon-file" />
      </a>
    </div>
  );
  return (
    <div id="admin-item" className="project-item">
      <div className="content">
        <p>{subTitle}</p>
        <p>{description}</p>
      </div>
      <div className="files">
        {link}
        {file}
      </div>
    </div>
  );
}
