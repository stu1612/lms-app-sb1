// npm
import { useState, useContext } from "react";
// files
import { createDocumentWithId } from "../../firebase/fireStore";
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import { createFile } from "../../firebase/cloudStorage";
import form from "../../data/createProject.json";
import InputField from "../InputField";
import validateString from "../../scripts/validateString";

export default function CreateProject({ path }) {
  // global state
  const { projects, setProjects, file, setFile } = useContext(AppContext);
  const { setIsModal } = useContext(ModalContext);

  // local state
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkURL, setLinkURL] = useState("");

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const newId = titleToURL(subTitle);
    const newItem = {
      subTitle: subTitle,
      description: description,
      linkURL: linkURL,
      fileURL: "",
    };

    // upload to cloudStorage
    const storagePath = "courses/";
    const id = Math.random() * 100;
    const pathName = `${subTitle}-${id}.png`;
    const fileName = `${storagePath}${pathName}`;
    const updatedFileURL = await createFile(fileName, file);

    // add url into object
    newItem.fileURL = updatedFileURL;

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
    setProjects([...projects, newItem]);
    setIsModal(null);
  }

  function onFail(error) {
    console.error(error);
  }

  function onFileSelect(event) {
    const file = event.target.files[0];
    if (file === null) return;
    setFile(file);
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Create a new item</h2>
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
      <input
        type="file"
        accept="application/pdf, application/vnd.ms-excel"
        onChange={onFileSelect}
      />
      <button>Submit</button>
    </form>
  );
}
