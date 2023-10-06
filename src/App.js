import "./app.scss"

import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Components/pages/home/home';
import User from './Components/pages/user/user';
import Client from './Components/pages/client/client';
import Employees from './Components/pages/employees/employees';
import Materials from './Components/pages/materials/materials';
import Budget from './Components/pages/budget/budget';
import Reception from './Components/pages/reception/reception';
import Providers from './Components/pages/providers/providers';
import Footer from './Components/pure/footer';
import ClientList from './Components/pages/client/clientList';
import Header from "./Components/pure/header";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/client" element={<Client />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/providers" element={<Providers />} />    
          <Route path="/footer" element={<Footer />} />
          <Route path="/clientList" element={<ClientList />} />
        </Routes>
    </div>
  );
}

export default App;
