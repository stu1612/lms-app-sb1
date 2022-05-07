// NPM package
import { doc, collection } from "firebase/firestore";
import { addDoc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

// Project files
import { fireStore } from "./firebase";

export async function createDocumentWithId(path, id, data) {
  let payload = { data: undefined, error: false };

  try {
    const documentReference = doc(fireStore, path, id);
    await setDoc(documentReference, data);

    payload = { data: `Document with id ${id} created!`, error: false };
  } catch (error) {
    payload = { data: error, error: true };
  }

  return payload;
}
