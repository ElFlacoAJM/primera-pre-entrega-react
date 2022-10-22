import React from 'react'
import { Header } from "./Componentes/Header";
import { Carrito } from "./Componentes/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./Componentes/page";
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
