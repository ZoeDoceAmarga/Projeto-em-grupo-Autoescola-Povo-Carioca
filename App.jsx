import { Link, Outlet } from 'react-router-dom'
import './App.css'

// Componentes
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
     <Navbar />
      <h2>HOME</h2>   
     


      <Outlet /> 
    </div>
  )
}

export default App
