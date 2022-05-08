// npm
import { useState, useContext } from "react";

// files
import { createDocumentWithId } from "../../firebase/fireStore";
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import form from "../../data/createCategory.json";
import InputField from "../InputField";
import validateString from "../../scripts/validateString";

export default function CreateCategory() {
  // Global state
  const { courses, setCourses } = useContext(AppContext);
  const { setIsModal } = useContext(ModalContext);

  // Local state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // properties
  const path = "dashboard/courses/content/";

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const newId = titleToURL(title);
    const newItem = {
      title: title,
      description: description,
    };

    const isCompleted = await createDocumentWithId(path, newId, newItem).catch(
      onFail
    );

    if (isCompleted) onSucess(newItem, newId);
  }

  function titleToURL(title) {
    const lowercase = title.toLowerCase();
    const trim = lowercase.trim();
    const replace = trim.replace(" ", "-");

    return replace;
  }

  function onSucess(newItem, newId) {
    newItem.id = newId;
    setCourses([...courses, newItem]);
    setIsModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a document, check that the name is not reapeated.");
  }

  return (
    <form onSubmit={onSubmit} className="form-fields w-90">
      <h2>Create a new item</h2>
      <InputField
        setup={form.title}
        state={[title, setTitle]}
        validation={validateString}
      />
      <InputField
        setup={form.description}
        state={[description, setDescription]}
        validation={validateString}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
