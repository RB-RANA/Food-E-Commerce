import { Routes, Route } from "react-router-dom"
import NavBer from "./Components/NavBer/NavBer";
import {Home,Product} from './Page'



function App() {
  return (

    <>
    <NavBer/>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/product" element={ <Product/> } />
       
      </Routes>
    
    </>

  );
}

export default App;
