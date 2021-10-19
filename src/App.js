import { Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/Welcome">
        <div className="cont">
          <h1>The Welcome Page</h1>
        </div>
      </Route>

      <Route path="/About">
        <div className="cont">
          <h1>The About Page</h1>
        </div>
      </Route>
    </>
  );
}

export default App;
