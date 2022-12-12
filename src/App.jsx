import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Header from './componentes/Header/Header'
import Footer from "./componentes/Footer/Footer"
import {ItemCount}  from './componentes/ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>  
      <Routes>
        <Route path='' element={< ItemListContainer />}></Route>
        <Route path='/categoria/:categoriaId' element={< ItemListContainer/>}></Route>
        <Route path='/detail:ProductsId' element={< ItemDetailContainer/>}></Route>
        <Route path='/counter' element={<ItemCount/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
