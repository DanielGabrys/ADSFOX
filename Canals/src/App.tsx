import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from "react-router-dom";

import {Home} from "./Components/Home";
import {CanalIndex} from "./Components/Canals/CanalIndex";
import {CanalCreate} from "./Components/Canals/CanalCreate";
import {CanalEdit} from "./Components/Canals/CanalEdit";
import {CanalProvider} from "./Components/Context/CanalContext";


function App() {
  const [count, setCount] = useState(0)

  return (
      <CanalProvider>
        <div className="App">
            <nav>
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/canals"> Canals </Link> </li>
                    <li> <Link to="/canals/create"> Create Canal </Link> </li>

                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/canals" element={<CanalIndex/>} />
                <Route path="/canals/create" element={<CanalCreate/>} />
                <Route path="/canals/:id/edit" element={<CanalEdit/>} />
            </Routes>
        </div>
      </CanalProvider>
  )
}

export default App
