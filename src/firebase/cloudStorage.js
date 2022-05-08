// npm
import { ref } from "firebase/storage";
import { getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

// files
import { cloudStorage } from "./firebase";

// create
export async function createFile(filePath, file) {
  const fileReference = ref(cloudStorage, filePath);

  await uploadBytes(fileReference, file); // uploading a file to the server
  return await getDownloadURL(fileReference); // getting the URL
}

// delete
export async function deleteFile(filePath) {
  const fileReference = ref(cloudStorage, filePath);

  await deleteObject(fileReference);
}
