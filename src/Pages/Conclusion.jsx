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
    { name: "La Boss !", img: sabrineImg },
    { name: "Baobab", img: baoImg },
    { name: "Morgane AKA joue pas au uno avec elle", img: morganeImg },
    { name: "Tonton Galsen", img: alassaneImg },
    { name: "Jacky Chan", img: jackyImg },
    { name: "Steak House", img: steecyImg },
    { name: "Guigzeeeer", img: guillaumeImg },
    { name: "Le-R tema le bgggggg !", img: lerImg },
    { name: "Et encore moi, c'est mon site je fais ce que je veux !", img: moiImg },
    { name: "DieyDiey", img: dieyImg },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="conclusion-container">
      <h1 className="title">Conclusion</h1>

      <div className="text-block">
        <p>
          Le service après-vente Apple, c’est un tout : un écosystème pensé pour offrir la meilleure
          expérience possible, du support en ligne jusqu’à l’accompagnement physique en magasin.
        </p>
        <p>
          L’AppleCare, le support téléphonique, les diagnostics à distance, la gestion logistique des
          réparations, les experts sur place, la bienveillance des équipes… tout est construit autour
          d’une idée centrale : l’excellence au service du client.
        </p>
      
      </div>

      <div className="team-section">
        <h2>Un grand merci à toute l'équipe 💙</h2>
        <p className="team-intro">
          Sans vous, cette expérience au travail serait beaucoup moins intéressante, moins enrichissante, et moins fun, je vous considère
          comme ma famille, chacun d'entre vous, et pour vous remercier, j'affiche vos grosses tête ici la.
        </p>

        <div className="carousel">
          <button className="carousel-button" onClick={goToPrevious}>◀</button>

          <div className="carousel-content">
            <img
              src={teamMembers[currentIndex].img}
              alt={teamMembers[currentIndex].name}
              className="carousel-image"
            />
            <p className="carousel-name">{teamMembers[currentIndex].name}</p>
          </div>

          <button className="carousel-button" onClick={goToNext}>▶</button>
        </div>
      </div>
    </div>
  );
}
