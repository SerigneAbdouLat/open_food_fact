// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './components/Search'; // Importation du composant Search
import Welcome from './pages/Welcome'; // Importation du composant Welcome

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Welcome />} /> {/* Nouvelle route pour la bienvenue 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />*/}
        <Route path="/search" element={<Search />} /> {/* Nouvelle route pour la recherche */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
