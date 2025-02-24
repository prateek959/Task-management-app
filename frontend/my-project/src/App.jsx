import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompleteTasks from './pages/CompleteTasks'
import IncompleteTasks from './pages/IncompleteTasks'
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen relative'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route index element={<AllTasks/>}/>
          <Route path='/importantTasks' element={<ImportantTasks/>}/>
          <Route path='/completedTasks' element={<CompleteTasks/>}/>
          <Route path='/incompletedTasks' element={<IncompleteTasks/>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App