import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllStores from "./components/core/AllStores";
import IndieStore from "./components/core/IndieStore";
import Login from "./components/core/Login";
import ProductPage from "./components/core/ProductPage";
import Landing from "./pages/Landing";
import Marketplace from "./pages/Marketplace";
import Studio from "./pages/Studio";
import StoreProfile from "./pages/profilePage";
import Callback from "./pages/Callback";

const App = () => {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/marketplace" element={<Marketplace />} />.
          <Route path="/product/:id" element={<ProductPage />} />.
          <Route path="/register" element={<Login />} />
          <Route path="/stores" element={<AllStores />} />
          <Route path="/indie-store/:id" element={<IndieStore />} />
          <Route path="/store/:id" element={<StoreProfile />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
