import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import {auth} from './firebase';
import Chat from './Chat';
import Sidebar from './Sidebar'
import {selectUser} from './features/userSlice';
import Login from './Login'
import {login, logout} from './features/userSlice'
function App() {

const user = useSelector(selectUser)
const dispatch = useDispatch()
useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    console.log(authUser)
    if(authUser){
      dispatch(login({
        uid:authUser.uid,
        email:authUser.email,
        photoURL : authUser.photoURL,
        displayName : authUser.displayName
      }))
    }
    else{
      dispatch(logout())
    }
  })
}, [dispatch])

return (
    <div className="app">
    {user ? (<>
      <Sidebar/>
      <Chat/>
      </>
    )
    :
    (
      <Login/>
    )}
      
    </div>
  );
}

export default App;
