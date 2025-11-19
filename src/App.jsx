import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apple from './pages/Apple';
import Comparatif from './pages/Comparatif';
import Conclusion from './pages/Conclusion';
import Quiz from './Component/Quiz';
import Header from './Component/Header';
import Footer from './Component/Footer';

import appleStoreImg from './assets/apple-store.jpg';

function App() {
  return (
    <>
      {/* ✅ Fond d’écran toujours présent */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${appleStoreImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <BrowserRouter>
        <Header />

        {/* ✅ Conteneur global des pages */}
        <div className="main-container" style={{ minHeight: "100vh", padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apple" element={<Apple />} />
            <Route path="/comparatif" element={<Comparatif />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
