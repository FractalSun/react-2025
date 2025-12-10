import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Boton from './components/Boton.jsx'
import Formulario from './components/Formulario.jsx'
import Carrito from './components/Carrito.jsx'
import Clicker from './components/Clicker.jsx'
import Productos from './components/Productos.jsx'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio.jsx'
import Contacto from './components/Contacto.jsx'

function App() {
  return (
    <>
    <Header />
    <Nav />
    <Routes>
      <Route path={'/'} element={<Inicio/>}/>
      <Route path={'/contacto'} element={<Contacto/>}/>
    </Routes>
    <Main />
    <Boton/>
    <Formulario/>
    <Carrito/>
    <Clicker/>
    <Productos/>
    <Footer />
    </>
  )
}

export default App;
