import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home/Home";
import GateDetails from "./pages/GateDetails/GateDetails";
import CheapTravel from "./pages/CheapTravel/CheapTravel";
import NavBar from "./components/NavBar/NavBar";
import GatesSearch from "./components/GatesComponents/GatesSearch/GatesSearch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/starseeker/gates/" element={<GatesSearch />} />
          <Route
            path="/starseeker/gates/gate-details/:code"
            element={<GateDetails />}
          />
          <Route path="/starseeker/cheap-travel" element={<CheapTravel />} />
        </Routes>
        <Footer />
      </Router>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
