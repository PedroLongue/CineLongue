import NavBar from './components/NavBar/NavBar.jsx'
import MainContent from './components/mainContent/mainContent.jsx'


import './App.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className='App'>
      <NavBar />
      <MainContent />
      <Outlet />
    </div>
  )
}

export default App
