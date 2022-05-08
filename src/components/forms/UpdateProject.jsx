// npm
import { useContext, useState } from "react";

// Project files
import InputField from "../InputField";
import form from "../../data/createProject.json";
import { updateDocument } from "../../firebase/fireStore";
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import validateString from "../../scripts/validateString";

export default function UpdateProject({ item, path }) {
  // Global state
  const { projects, setProjects } = useContext(AppContext);
  const { isModal, setIsModal } = useContext(ModalContext);

  // Local state
  const [subTitle, setSubTitle] = useState(item.subTitle);
  const [description, setDescription] = useState(item.description);
  const [linkURL, setLinkURL] = useState(item.linkURL);
  const [fileURL, setFileURL] = useState(item.fileURL);

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const editedItem = {
      id: item.id,
      subTitle: subTitle,
      description: description,
      linkURL: linkURL,
      fileURL: fileURL,
    };

    const isUpdated = updateDocument(path, editedItem).catch(onFail);

    if (isUpdated) onSucess(editedItem);
  }

  function onSucess(editedItem) {
    const clonedCourses = [...projects];
    const index = clonedCourses.findIndex((item) => item.id === editedItem.id);

    clonedCourses[index] = editedItem;
    setProjects(clonedCourses);
    setIsModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not update the item. Try again");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Update your changes</h2>
      <InputField
        setup={form.subTitle}
        state={[subTitle, setSubTitle]}
        validation={validateString}
      />
      <InputField
        setup={form.description}
        state={[description, setDescription]}
        validation={validateString}
      />
      <InputField setup={form.link} state={[linkURL, setLinkURL]} />

      <button className="btn btn-primary">Edit course</button>
    </form>
  );
}
