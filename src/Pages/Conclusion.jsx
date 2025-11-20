import React, { useState } from "react";
import "./Conclusion.css";

import sabrineImg from "../assets/Sabrine.png";
import baoImg from "../assets/bao.jpg";
import morganeImg from "../assets/morgane.jpg";
import alassaneImg from "../assets/alassane.jpg";
import jackyImg from "../assets/jacky.jpg";
import steecyImg from "../assets/steecy.jpg";
import guillaumeImg from "../assets/guillaume.jpg";
import lerImg from "../assets/le-r.jpg";
import moiImg from "../assets/encore-moi.jpg";
import dieyImg from "../assets/diey.png";

export default function Conclusion() {
  const teamMembers = [
    { name: "Sabigboss !", img: sabrineImg },
    { name: "Baobab", img: baoImg },
    { name: "Morgane AKA Koa Girl", img: morganeImg },
    { name: "Tonton Galsen", img: alassaneImg },
    { name: "Jacky Chan", img: jackyImg },
    { name: "Steak House", img: steecyImg },
    { name: "Guigzeeeer", img: guillaumeImg },
    { name: "Le-R (tema le bg !)", img: lerImg },
    { name: "Moi (c'est mon site !)", img: moiImg },
    { name: "DieyDiey", img: dieyImg },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // Pour reset l'animation

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    setKey(prev => prev + 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    setKey(prev => prev + 1);
  };

  return (
    <div className="conclusion-container">
      
      {/* Panneau principal en verre sombre */}
      <div className="glass-panel">
        
        {/* GAUCHE : TEXTE */}
        <div className="left-content">
          <h1 className="title">Le mot de la fin 🍏</h1>
          
          <div className="text-block">
            <p>
              Le service après-vente Apple, c’est un écosystème pensé pour offrir la 
              <strong> meilleure expérience possible</strong>, du support en ligne jusqu’à l’accompagnement physique.
            </p>
            
            <div className="highlight-box">
              <p>
                "L'excellence au service du client."
              </p>
            </div>

            <h3 className="dedicace-title">Dédicace spéciale à la Team 💙</h3>
            <p>
             Sans vous, cette expérience au travail serait beaucoup moins intéressante, moins enrichissante, et moins fun, je vous considère
          comme ma famille, chacun d'entre vous, et pour vous remercier, j'affiche vos grosses tête ici la.
            </p>
          </div>
        </div>

        {/* DROITE : CAROUSEL */}
        <div className="right-content">
          <span className="counter-badge">{currentIndex + 1} / {teamMembers.length}</span>
          
          <div className="photo-frame">
            <img
              key={key}
              src={teamMembers[currentIndex].img}
              alt={teamMembers[currentIndex].name}
              className="carousel-image fade-in"
            />
          </div>

          <div className="carousel-name">
            <span key={key} className="fade-in">{teamMembers[currentIndex].name}</span>
          </div>

          <div className="nav-buttons">
            <button className="btn btn-prev" onClick={goToPrevious}>◀ Précédent</button>
            <button className="btn btn-next" onClick={goToNext}>Suivant ▶</button>
          </div>
        </div>

      </div>
    </div>
  );
}