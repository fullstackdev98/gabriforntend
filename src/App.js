import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Container/Pages/Home";

import Tasks from "./Container/Pages/Tasks";
import Notes from "./Container/Pages/Notes";
import Signup from "./Container/Auth/Signup";

import Dashboard from "./Container/Pages/Dashboard";

import { useSelector } from "react-redux";

const App = () => {
  const { token } = useSelector((state) => state.contact);

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(token));
  }, [token]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         
          {token && <Route path="/tasks" element={<Tasks />} />}
          {token && <Route path="/notes" element={<Notes />} />}
          {token && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="/signup" element={<Signup />} />
          
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
