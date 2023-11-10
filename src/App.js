import "./app.scss";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/pages/home/home";
import User from "./Components/pages/user/user";
import Client from "./Components/pages/client/client";
import Employees from "./Components/pages/employees/employees";
import Materials from "./Components/pages/materials/materials";
import Budget from "./Components/pages/budget/budget";
import Reception from "./Components/pages/reception/reception";
import Providers from "./Components/pages/providers/providers";
import ClientList from "./Components/pages/client/clientList";
import Header from "./Components/pure/header";
import Footer from "./Components/pure/footer";
import { useEffect } from "react";
import wspIcon from "../src/assets/images/home/whatsapp.png";
import ImageFlot from "../src/Components/common/ImageFlot";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/employees" element={<Employees />} />import ImageFlot from "../common/ImageFlot";import wspIcon from "../../assets/images/home/whatsapp.png";
          <Route path="/client" element={<Client />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/clientList" element={<ClientList />} />
        
        </Routes>

        <ImageFlot src={wspIcon} />

      </div>
      <Footer />
    </div>
  );
};

export default App;
