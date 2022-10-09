import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import MessageHome from './Pages/Messages/MessageHome';
import Navbar from "./Pages/Navbar";
import StudentHome from './Pages/Student/StudentHome';
import TaskHome from './Pages/Task/TaskHome';
import TeamHome from './Pages/Team/TeamHome';
import TopNav from './TopNav';
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register';
import { userContext } from './Pages/Contexts/UserContext';
import { useContext, useState } from 'react';
import Signout from './Pages/Auth/Signout';


function App() {

  const [ user] = useContext(userContext)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [signOut, setSignOut] = useState(false)


  // closing and opening of the login page
  function openLogin(){
    if(register === true){
      setRegister(false)
    }
    setLogin(prev => !prev)
  }


// closing and opening of the Register page
  function openReg(){
    if(login === true){
      setLogin(false)
    }
    setRegister(prev => !prev)
  }

// closing and opening of the SigOut page

function openSignOut(){
  setSignOut(prev=> !prev)
}


  return (
    <div className='App'>
      <div className='nav'>
        <Navbar open={openSignOut} />
        {signOut && <Signout />}
      </div>

      <div className='page container-lg  mx-5 my-3'>
        <TopNav  login={openLogin} signup={openReg}/>
        {login && <Login close={openLogin} />}
        {register && <Register open={openLogin}/>}
       {!signOut && <>
        { user && 
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/task' element={<TaskHome />} />
            <Route path='/team' element={<TeamHome />} />
            <Route path='/message' element={<MessageHome />} />
            <Route path='/students' element={<StudentHome />} />
          </Routes>
        }
        </>}
        
        
      </div>
      
    </div>
  );
}

export default App;
