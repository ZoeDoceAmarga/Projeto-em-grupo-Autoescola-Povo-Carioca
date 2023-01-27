import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'

// Componentes
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
     <Navbar />
     


      <Outlet /> 
      <Footer />
    </div>
  )
}

export default App
