// NPM Packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// Project file
import { authentication } from "./firebase";

// Methods
export async function createUser(email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    authentication,
    email,
    password
  );

  return userCredential.user.uid;
}

export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    authentication,
    email,
    password
  );
  return userCredential.user.uid;
}

export async function recoverUser(email) {
  await sendPasswordResetEmail(authentication, email);
}
