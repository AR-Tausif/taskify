// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx1jHcrPENl-1nLSkOZ11hUwY5N3ppj8Q",
  authDomain: "taskify-task.firebaseapp.com",
  projectId: "taskify-task",
  storageBucket: "taskify-task.appspot.com",
  messagingSenderId: "483392577087",
  appId: "1:483392577087:web:ac7616f8a45bf705b7628a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;