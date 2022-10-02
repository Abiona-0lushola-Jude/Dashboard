import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import MessageHome from './Pages/Messages/MessageHome';
import Navbar from "./Pages/Navbar";
import StudentHome from './Pages/Student/StudentHome';
import TaskHome from './Pages/Task/TaskHome';
import TeamHome from './Pages/Team/TeamHome';
import TopNav from './TopNav';


function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <Navbar />
      </div>

      <div className='page container-lg  mx-5 my-3'>
        <TopNav />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/task' element={<TaskHome />} />
            <Route path='/team' element={<TeamHome />} />
            <Route path='/message' element={<MessageHome />} />
            <Route path='/students' element={<StudentHome />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
