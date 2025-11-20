import React, { useState } from 'react';
import './Comparatif.css';

// Tes images
import etape1 from '../assets/etape1.png';
import etape3 from '../assets/etape3.png';
import etape4 from '../assets/etape4.png';
import etape5 from '../assets/etape5.png';
import etape6 from '../assets/etape6.png';
import etape7 from '../assets/etape7.png';
import etape8 from '../assets/etape8.png';
import etape9 from '../assets/etape9.png';
import etape10 from '../assets/etape10.png';
import moi from '../assets/moi-debile.jpg';

const etapes = [
  { image: etape1, description: "Étape 1 : Allez sur le site d'Apple, section assistance." },
  { image: etape3, description: "Étape 2 : Cliquez sur 'Programmer une réparation' (évidemment, je vais pas tout vous dire !)." },
  { image: etape4, description: "Étape 3 : Choisissez la nature du problème (ex: Batterie)." },
  { image: moi, description: "Ah mince, c'est juste moi entrain de faire l'idiot hihi, on reprend ! Dice." },
  { image: etape5, description: "Étape 4 : Là bah hyper simple, cliquez sur 'Continuer'." },
  { image: etape6, description: "Étape 5 : Choisissez 'En magasin' (l'envoi est à votre charge hors garantie)." },
  { image: etape7, description: "Étape 6 : Connectez-vous à votre compte Apple." },
  { image: etape8, description: "Étape 7 : Saisissez le numéro de série (si vous avez la flemme, faites pas ! DISSE)." },
  { image: etape9, description: "Étape 8 : Choisissez le magasin pour la réparation." },
  { image: etape10, description: "Étape 9 : Date et heure du RDV. Emballé c'est pesé ! DIX !" },
];

const Comparatif = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < etapes.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="presentation-container">
      
      {/* COLONNE GAUCHE : LE DISCPOURS */}
      <div className="card text-column">
        <h1 className="title">Le SAV Apple </h1>
        
        <div className="scrollable-content">
            <h2>Un parcours structuré</h2>
            <p>Le parcours client se fait de deux manières :</p>
            <ul className="apple-list">
            <li><strong>📞 Téléphone :</strong> 0 805 54 00 03 (avec diagnostic à distance).</li>
            <li><strong>💻 En ligne :</strong> Prise de RDV ou assistance chat.</li>
            </ul>

            <div className="divider"></div>

            <p>
            Lors de l'appel, un diagnostic différencie les problèmes <strong>logiciels</strong> et <strong>matériels</strong>.
            </p>
            <p>
            Pour le matériel (casse, batterie), la solution la plus rapide est souvent le RDV en magasin.
            Je vous montre comment ça se passe étape par étape juste ici 👉
            </p>
            
            <a href="https://support.apple.com/fr-fr" target="_blank" rel="noopener noreferrer" className="link-btn">
            Voir le site officiel ↗
            </a>
        </div>
      </div>

      {/* COLONNE DROITE : LA DÉMO INTERACTIVE */}
      <div className="card demo-column">
        <div className="demo-header">
            <span className="tag">Tutoriel Live</span>
            <span className="counter">{index + 1} / {etapes.length}</span>
        </div>

        <div className="screen-frame">
            <img src={etapes[index].image} alt="Tuto" className="screen-img" />
        </div>

        <div className="caption-box">
            <p>{etapes[index].description}</p>
        </div>

        <div className="controls">
            <button onClick={prev} disabled={index === 0} className="ctrl-btn">
                ← Retour
            </button>
            <button onClick={next} disabled={index === etapes.length - 1} className="ctrl-btn primary">
                Suivant →
            </button>
        </div>
      </div>

    </div>
  );
};

export default Comparatif;