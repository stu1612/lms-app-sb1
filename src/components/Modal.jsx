// npm
import { useContext } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// files
import { ModalContext } from "../contexts/ModalContext";

export default function Modal() {
  const { setIsModal, isModal } = useContext(ModalContext);

  // safegaurd
  if (isModal == null) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div className="modal-background">
        <FontAwesomeIcon
          className="modal-icon"
          icon={faCircleXmark}
          onClick={() => setIsModal(null)}
        />
        <div className="modal-content">{isModal}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
