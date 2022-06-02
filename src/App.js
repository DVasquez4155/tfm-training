// import logo from './logo.svg';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/home";
import Food from "./pages/food";
import Specs from "./pages/specs";
import Cocktail from "./pages/cocktail";
import Wine from "./pages/wine";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter basename="/">
      <Nav />
      <div className="App col-lg-12 mx-auto p-2 py-md-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="food" element={<Food />} />
          <Route path="specs" element={<Specs />} />
          <Route path="cocktail" element={<Cocktail />} />
          <Route path="wine" element={<Wine />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <footer className="pt-5 my-5 text-muted border-top">
          Created by Daniel Vasquez · © 2022
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
