// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, orderBy, query, addDoc, Timestamp, updateDoc, getCountFromServer } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCLwJYYdI4hUgRbkUlPXVpy7JenrIP92Q",
  authDomain: "svelte-project-manager.firebaseapp.com",
  projectId: "svelte-project-manager",
  storageBucket: "svelte-project-manager.appspot.com",
  messagingSenderId: "96941287208",
  appId: "1:96941287208:web:3535db4c46df2eb722121d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const projectsCollection = collection(db, "projects");


async function getProject(id) {
  const docSnap = await getDoc(doc(db, "projects", id));
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    console.log("No such document!");
  }
}

async function getTodos(id){
  let fbTodos = [];
  const queryTodos = query(collection(db, "projects", id, "todos"), orderBy('created', 'desc'));
  const querySnapshot = await getDocs(queryTodos);
  querySnapshot.forEach((doc) => {
    let todo = {...doc.data(), id: doc.id};
    fbTodos = [todo, ...fbTodos]
  });
  return fbTodos;
}

async function addTodo(projId, task){
  const todosCollection = collection(db, "projects", projId, "todos");
  const docRef = await addDoc(todosCollection,{
    task: task,
    completed: false,
    created: Timestamp.fromDate(new Date())
  });
  console.log("Document written with ID: ", docRef.id);
}

async function toggleCompleted(projId, todoId, completed){
  const completedRef = doc(db, "projects", projId, "todos", todoId);
  console.log("toggled a todo")
  await updateDoc(completedRef, {
    completed: !completed
  })
}

async function countTodos(projId){
  const todosCollection = collection(db, "projects", projId, "todos");
  const snapshot = await getCountFromServer(todosCollection);
  return snapshot.data().count;
}

async function editProject(projId, title, description, deadline){
  const projectRef = doc(db, "projects", projId);
  console.log("edited a project")
  await updateDoc(projectRef, {title: title, description: description, deadline: deadline});
}

async function createProject(title, description, deadline){
  const docRef = await addDoc(projectsCollection, {
    title: title, 
    description: description,
    deadline: deadline
  })
  console.log("Document created with ID: ", docRef.id);
}

//make a svelte form with 2 text input and a date input?

export{
  db,
  projectsCollection,
  getProject,
  getTodos,
  addTodo,
  toggleCompleted,
  countTodos,
  editProject,
  createProject
}




