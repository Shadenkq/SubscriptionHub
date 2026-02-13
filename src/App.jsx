import { useState } from "react";
import DashboardLayouts from "./layouts/DashbordLayouts";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MovieSeriesApi from "./components/MovieSeriesApi";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route
          path="/dashboard"
          element={isLoggedIn ? <DashboardLayouts setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />}
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
