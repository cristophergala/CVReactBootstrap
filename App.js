import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//importamos componentes
import Barra from "./componentes/Menu";
import Acerca from "./paginas/AcercaDe";
import Domicilio from "./paginas/Domicilio";
import Estudio from "./paginas/Estudio";
import Hobbies from "./paginas/Hobbies";

import NavBarExample from "./componentes/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route index element={<Acerca />} />
            <Route path="Barra" element={<Barra />} />
            <Route path="Domicilio" element={<Domicilio />} />
            <Route path="Estudio" element={<Estudio />} />
            <Route path="Hobbies" element={<Hobbies />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
