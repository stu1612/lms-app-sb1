// npm
import { useContext, useState } from "react";

// Project files
import InputField from "../InputField";
import form from "../../data/createCategory.json";
import { updateDocument } from "../../firebase/fireStore";
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";

export default function UpdateCategory({ item }) {
  // Global state
  const { courses, setCourses } = useContext(AppContext);
  const { isModal, setIsModal } = useContext(ModalContext);

  // Local state
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const editedItem = {
      id: item.id,
      title: title,
      description: description,
    };

    const isUpdated = updateDocument(
      "dashboard/courses/content/",
      editedItem
    ).catch(onFail);

    if (isUpdated) onSucess(editedItem);
  }

  function onSucess(editedItem) {
    const clonedCourses = [...courses];
    const index = clonedCourses.findIndex((item) => item.id === editedItem.id);

    clonedCourses[index] = editedItem;
    setCourses(clonedCourses);
    setIsModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not update the item. Try again");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Update your changes</h2>
      <InputField setup={form.title} state={[title, setTitle]} />
      <InputField
        setup={form.description}
        state={[description, setDescription]}
      />
      <button className="btn btn-primary">Edit course</button>
    </form>
  );
}
