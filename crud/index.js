const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  deleteDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
  apiKey: "AIzaSyB_GzAay4pyIMPCS53sDLvdmMHN-t3gVHI",
  authDomain: "colebrary-exam.firebaseapp.com",
  projectId: "colebrary-exam",
  storageBucket: "colebrary-exam.appspot.com",
  messagingSenderId: "230963715658",
  appId: "1:230963715658:web:5413fcf297887bebc450b3",
  measurementId: "G-4L8PGWZKYL"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();