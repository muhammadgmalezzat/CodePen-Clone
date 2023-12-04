import './App.css';
import { Routes, Route } from "react-router-dom";
import Spinner from './Components/spinner';
import Home from "./Container/Home"
import NewProject from "./Container/newProject"
import { useEffect, useState } from 'react';
import { auth,db } from './config/firebase.config';
import { collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { SET_USER } from './context/actions/userActions';
import { SET_PROJECTS } from './context/actions/ProjectActions';
import ProjectView from './Container/ProjectView';

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(() => {
          //dispatch actions
          dispatch(SET_USER(userCred?.providerData[0]));
        })
      } 
      setInterval(() => {
        setloading(false);
      }, 1000)
    })
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const projectQuery = query(
      collection(db, "projects"), orderBy("id", "desc")
    );
    const unsubscribe = onSnapshot(projectQuery, (query) => {
      const projectsList = query.docs.map(doc => doc.data());
      dispatch(SET_PROJECTS(projectsList));
    })

    return unsubscribe;
  }, [])
  
  return (
    <>
      {
        loading ? (
          <div className='w-screen h-screen flex items-center justify-center overflow-hidden'>
            <Spinner />
          </div>) :
          (
            <div className='w-screen h-screen flex justify-start items-start overflow-hidden'>
              <Routes>
                <Route path='/home/*' element={<Home />} />
                <Route path='/newProject' element={<NewProject />} />
                <Route path='/home/projects/project-view/:slug' element={<ProjectView />} />
              </Routes>
            </div>
          )
      }
    </>
  );
}

export default App;
