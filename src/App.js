import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './pages/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
     dispatch(login({
      uid:userAuth.uid,
      email:userAuth.email
     }))
    }else{
     dispatch(logout())
    }
   })

   return () =>{
    unsubscribe();
   }

  },[dispatch])

  return (
    <div className="app">
      <BrowserRouter>
        {
          !user ? (
            <Login />
          ) : (
            <Routes>
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/' element={<HomeScreen />} />

            </Routes>
          )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
