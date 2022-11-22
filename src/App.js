import "./App.css";
// import fantasy from "./fantasy.json";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Welcome from "./components/Welcome.jsx";
import LatestRelease from "./components/LatestRelease.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App;
