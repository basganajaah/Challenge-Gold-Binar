import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CarDetail from "../pages/CarDetail";
import SearchCarPage from "../pages/SearchCarPage";
// import LoginPage from "../pages/LoginPage";
// import NotFound from "../pages/NotFound";
// import PrivateRoute from "./PrivateRoute";
// import ProtectedRoute from "./ProtectedRoute";

const SetupRouter = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/detailmobil" element={<CarDetail />} /> */}
          <Route path="/search-car" element={<SearchCarPage />} />
          <Route path="/detailmobil/:id" element={<CarDetail />} />
        {/* <Route path="/detailmobil/:id" element={<Footer />} /> */}
      </Routes>
    </Router>
  );
};

export default SetupRouter;
