import React from "react";
import{Message} from "./pages/Message";
import { Buttons } from "./pages/Buttons";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Router} from "./pages/Router";
import {Counters} from "./pages/Counters";
import {Items} from "./pages/Items";
import {List} from "./pages/List";
import { Ristinolla } from "./ristinolla/Ristinolla";

function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
          <Route path='/' element={<Router/>}>
            <Route index element={<Message/>}/>
            <Route path="Buttons" element={<Buttons/>}/>
            <Route path="Counters" element={<Counters/>}/>
            <Route path="Item" element={<Items/>}/>
            <Route path="List" element={<List/>}/>
            <Route path="Ristinolla" element={<Ristinolla/>}/>
          </Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
