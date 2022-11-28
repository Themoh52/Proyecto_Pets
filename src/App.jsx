import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'//
import Header from './componentes/Header/Header.jsx'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Footer from './componentes/Footer/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
    < Header />
    < ItemListContainer />
    < Footer />
    </div>
  )
}

export default App
