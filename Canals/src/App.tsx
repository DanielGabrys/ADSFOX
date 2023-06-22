import React, { useState } from 'react'

import './App.css'
import {Routes, Route, Link} from "react-router-dom";

import {CanalIndex} from "./Components/Canals/CanalIndex";
import {CanalCreate} from "./Components/Canals/CanalCreate";
import {CanalEdit} from "./Components/Canals/CanalEdit";
import {CanalProvider} from "./Components/Context/CanalContext";


const App:React.FC =() => {
  const [count, setCount] = useState(0)

  return (
      <CanalProvider>
        <div className="App">
            <nav>
                <ul>

                    <li> <Link to="/canals"> Canals </Link> </li>
                    <li> <Link to="/canals/create"> Create Canal </Link> </li>

                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<CanalIndex/>} />
                <Route path="/canals" element={<CanalIndex/>} />
                <Route path="/canals/create" element={<CanalCreate/>} />
                <Route path="/canals/:id/edit" element={<CanalEdit/>} />
            </Routes>
        </div>
      </CanalProvider>
  )
}

export default App
