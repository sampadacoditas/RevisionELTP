import "./App.css";
import { Contact } from "./Pages/Contact";
import { About } from "./Pages/About";
import { Link, Route, Routes } from "react-router-dom";
import { Routers } from "./Routers/Routers";
import { array } from "./array/array";
import { Layout } from "./Pages/Layout/Layout";

function App() {
  return (
    <>
      {/* <Link to={"contact"}>Contact</Link>
      <Link to={"about"}>About</Link> */}
      {/* <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
   </Routes> */}
      <Layout/>
    </>
  );
}

export default App;
