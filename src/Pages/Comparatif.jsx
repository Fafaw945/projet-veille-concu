import React, { useState } from 'react';
import './Comparatif.css';

import etape1 from '../assets/etape1.png';
import etape2 from '../assets/etape2.png';
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
  { image: etape1, description: "Étape 1 : Allez sur le site d'Apple, vous cliquerez sur la section assistance et vous tomberez ici." },
  { image: etape3, description: "Étape 2 : Un peu plus bas sur cette page, vous tomberez sur 'Programmer une réparation', vous cliquez dessus évidemment, je vais pas tout vous dire !." },
  { image: etape4, description: "Étape 3 : Vous choisissez la nature de votre problème, moi j'ai simulé 'Réparation de la batterie'." },
  { image: moi, description: "Ah mince, c'est juste moi entrain de faire l'idiot hihi, on reprend ! Dice." },
  { image: etape5, description: "Étape 4 : La bah hyper simple, vous cliquez sur 'Continuer'." },
  { image: etape6, description: "Étape 5 : Ici, 2 choix s'offre à vous, vous pouvez programmer une réparation en centre, ou l'envoyer dans les entrepots Apple, par contre l'envoi est à votre charge si l'appareil est hors garanti, moi j'ai simulé une réparation en magasin." },
  { image: etape7, description: "Étape 6 : La encore pas bien compliqué, il faut se connecter a son compte Apple." },
  { image: etape8, description: "Étape 7 : Ici il faut saisir votre numéro de série, mais vous avez la flemme bah fait pas hein c'est pas obligatoire ! DISSE." },
  { image: etape9, description: "Étape 8 : Ici on vient choisir le magasin dans le quel on veut venir faire notre réparation." },
  { image: etape10, description: "Étape 9 : Ici on vient choisir la date et l'heure du rendez vous, et on confirme, emballé c'est pesé ! DIX !" },
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
    <div className="comparatif-page">
      <h1 className="typing">Comparatif des services après-vente</h1>

      <section>
        <h2>Apple : un parcours client structuré</h2>
        <p>Le parcours client pour le SAV d'Apple se fait de deux manières différentes :</p>
        <ul>
          <li>
            Par téléphone, au <strong>0 805 54 00 03</strong>, où un serveur vocal guide l’appel jusqu’à un conseiller.
          </li>
          <li>
            Via le site officiel d’Apple, où vous pouvez prendre rendez-vous en magasin ou accéder à l’assistance en ligne.
          </li>
        </ul>
        <p>
          Lors de votre appel, un diagnostic à distance peut être réalisé, à condition que votre appareil soit connecté à Internet.
          Une simple manipulation vous sera demandée pour lancer ce diagnostic. Le technicien différenciera alors les problèmes
          en deux catégories principales : logiciel ou matériel.
        </p>
        <p>
          Pour un problème matériel, comme une casse ou une batterie défaillante, les solutions seront différentes d’un souci logiciel,
          . Vous pouvez également vous rendre directement en magasin Apple pour obtenir de l’aide,
          et je vous montre comment ca ce passe avec une animation au petit oignon sur la slide d'après, mais d'abord, il faut prendre rendez vous, et je vous montre comment faire étape par étape, c'est partiiiiiiiiii.
        </p>
        <p>
          <a href="https://support.apple.com/fr-fr" target="_blank" rel="noopener noreferrer">
            En savoir plus sur le SAV Apple
          </a>
        </p>
      </section>

      <div className="etapes-container">
        <img src={etapes[index].image} alt={`Étape ${index + 1}`} className="etape-image" />
        <p className="etape-description">{etapes[index].description}</p>

        <div className="btn-group">
          <button onClick={prev} disabled={index === 0}>Précédent</button>
          <button onClick={next} disabled={index === etapes.length - 1}>Suivant</button>
        </div>
      </div>
    </div>
  );
};

export default Comparatif;
