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


function App() {

  const [ user] = useContext(userContext)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  function openLogin(){
    if(register === true){
      setRegister(false)
    }
    setLogin(prev => !prev)
  }

  function openReg(){
    if(login === true){
      setLogin(false)
    }
    setRegister(prev => !prev)
  }

  const username = !user ? "Loading" : user.username

  return (
    <div className='App'>
      <div className='nav'>
        <Navbar />
      </div>

      <div className='page container-lg  mx-5 my-3'>
        <TopNav  login={openLogin} signup={openReg}/>
        {login && <Login close={openLogin} />}
        {register && <Register close={openReg} open={openLogin}/>}
        { user && 
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/task' element={<TaskHome />} />
            <Route path='/team' element={<TeamHome />} />
            <Route path='/message' element={<MessageHome />} />
            <Route path='/students' element={<StudentHome />} />
          </Routes>
        }
        
      </div>
      
    </div>
  );
}

export default App;
