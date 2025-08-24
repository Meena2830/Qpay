

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ManageQR from "./components/ManageQR";
import SettlementHistory from "./components/SettlementHistory";
import BusinessProfile from "./components/BusinessProfile";
import { AppProvider } from "./contexts/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col h-screen bg-white">
          <Header />

          <div className="flex flex-1">
            <Sidebar />

            <main className="flex-1 p-6 overflow-y-auto bg-gray-50 ml-60">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/manage-qr" element={<ManageQR />} />
                <Route path="/history" element={<SettlementHistory />} />
                <Route path="/profile" element={<BusinessProfile />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
