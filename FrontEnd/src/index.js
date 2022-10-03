import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Pages/style.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StudentContextProvider } from './Pages/Contexts/StudentContext';
import { TeamContextProvider } from './Pages/Contexts/TeamContext';
import { TaskContextProvider } from './Pages/Contexts/TaskContext';
import { UserContextProvider } from './Pages/Contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
        <UserContextProvider>
        <TeamContextProvider>
        <StudentContextProvider>
        <TaskContextProvider>
           <App />        
        </TaskContextProvider>
        </StudentContextProvider>  
        </TeamContextProvider>
        </UserContextProvider>
        </BrowserRouter>
);
