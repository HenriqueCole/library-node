const { initializeApp } = require("firebase/app");
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
  deleteDoc,
} = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyB_GzAay4pyIMPCS53sDLvdmMHN-t3gVHI",
  authDomain: "colebrary-exam.firebaseapp.com",
  projectId: "colebrary-exam",
  storageBucket: "colebrary-exam.appspot.com",
  messagingSenderId: "230963715658",
  appId: "1:230963715658:web:5413fcf297887bebc450b3",
  measurementId: "G-4L8PGWZKYL",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function post(tableName, id, data) {
  if (id) {
    const referenceEntity = await setDoc(doc(db, tableName, id), data);
    const savedData = {
      ...data,
      id: id,
    };
    return savedData;
  } else {
    const referenceEntity = await addDoc(collection(db, tableName), data);
    const savedData = {
      ...data,
      id: referenceEntity.id,
    };
    return savedData;
  }
}

async function postBooks(tableName, id, data) {
  if (id) {
    const referenceEntity = await setDoc(doc(db, tableName, id), data);
    const savedData = {
      ...data,
      id: id,
    };
    return savedData;
  } else {
    data.status = "available";
    const referenceEntity = await addDoc(collection(db, tableName), data);
    const savedData = {
      ...data,
      id: referenceEntity.id,
    };
    return savedData;
  }
}

async function get(tableName) {
  const tableRef = collection(db, tableName);

  const q = query(tableRef);

  const querySnapshot = await getDocs(q);

  const list = [];

  querySnapshot.forEach((doc) => {
    const data = {
      ...doc.data(),
      id: doc.id,
    };
    list.push(data);
    console.log(doc.id, " => ", doc.data());
  });
  return list;
}

async function getById(tableName, id) {
  const docRef = doc(db, tableName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return new Error("Not found");
  }
}

async function remove(tableName, id) {
  const data = await deleteDoc(doc(db, tableName, id));
  return {
    message: `${id} deleted`,
  };
}

// async function updateStatus(tableName, id) {
//   const book = await getById(tableName, id);
//   book.status = "rented";
//   const updatedBook = await setDoc(doc(db, tableName, id), book);
//   return updatedBook;
// }

module.exports = {
  post,
  postBooks,
  get,
  getById,
  remove
};
