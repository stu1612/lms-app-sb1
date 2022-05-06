// npm
import { useContext } from "react";
import ReactDOM from "react-dom";

// files
import { ModalContext } from "../contexts/ModalContext";

export default function Modal() {
  const { isModal } = useContext(ModalContext);

  // safegaurd
  if (isModal == null) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div className="modal-background">
        <div className="modal-content">{isModal}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
