
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

import {CanalIndex} from "./Components/Canals/CanalIndex";
import {CanalCreate} from "./Components/Canals/CanalCreate";
import {CanalEdit} from "./Components/Canals/CanalEdit";
import {CanalProvider} from "./Components/Context/CanalContext";





const App:React.FC =() => {
  
  return (

    <BrowserRouter>

      <CanalProvider>
        <div className="App">

            <nav>
                <ul className="flex">

                         <li className="m-2 p-2 bg-green-500 hover:bg-green:700 rounded-md"> <Link to="/canals"> Canals </Link> </li>
                         <li className="m-2 p-2 bg-green-500 hover:bg-green:700 rounded-md"> <Link to="/canals/create"> Create Canal </Link> </li>
                
                </ul>
            </nav>


                <Routes>
                    <Route path="/" element={<CanalIndex/>} />
                    <Route path="/canals" element={<CanalIndex/>} />
                    <Route path="/canals/create" element={<CanalCreate/>} />
                    <Route path="/canals/:id/edit" element={<CanalEdit/>} />
                    <Route path="*" element={<PageNotFound />} />

                </Routes>
            
            
        </div>
      </CanalProvider>
      </BrowserRouter>

  )

  function PageNotFound() {
    return (
      <div>
        <h2>404 Page not found</h2>
      </div>
    );}


}

export default App
