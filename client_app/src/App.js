import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/home.page";
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";
import NotFoundPage from "./pages/NotFound.page";
import ProfilePage from "./pages/profile.page";
import UnauthorizedPage from "./pages/unauthorized.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/unauthorized" element={ <UnauthorizedPage /> } />
        <Route path='/*' element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
