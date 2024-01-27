import LandingPage from "./components/LandingPage/LandingPage";
// import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
       {pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/pokemon/:id" element={<Detail/>} />
        <Route path="/create" element={<CreatePokemon/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
