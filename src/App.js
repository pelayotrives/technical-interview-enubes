import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalogo" element={<Catalogo/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
