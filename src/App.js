import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/Welcome"
          element={
            <div className="cont">
              <h1>The Welcome Page</h1>
            </div>
          }
        />

        <Route
          path="/About"
          element={
            <div className="cont">
              <h1>The About Page</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
