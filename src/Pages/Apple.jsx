import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Apple.css';
import phoneSound from '../assets/phone-drop.mp3';

const dialogues = [
  { speaker: 'employee', text: " Bonjour, je m'appelle Baobab, Comment pourrais-je vous aider ?" },
  { speaker: 'client', text: " Bonjour Baobab, quel drôle de prénom, moi je m'appelle Steecy, je viens de faire tomber mon téléphone en faisant un salto, et l'écran s'est cassé ! Je veux le faire réparer" },
  { speaker: 'employee', text: " D'accord Steecy, aucun problème. Nous allons d'abord procéder à un diagnostic complet de l'appareil pour savoir si tout est en ordre sauf l'écran." },
  { speaker: 'employee', text: " Merci de patienter pendant la vérification..." },
  { speaker: 'employee', text: " Merci pour votre patience, tout est en ordre sauf l'écran, la réparation coute 300 euros" },
  { speaker: 'client', text: " COMBIEN ????????? J'ai demander une réparation pas une 207 !" },
  { speaker: 'employee', text: " Oui Steecy, vous avez bien entendu, 300 balles ! Souhaitez vous faire la réparation ?" },
  { speaker: 'client', text: " J'ai pas le choix de toute façon, vous prenez la carte vital ?" }, 
  { speaker: 'employee', text: " Non, et ni la carte navigo, je lance la réparation, ma collègue Jacky Chan vous appelera quand l'appareil sera réparer, avez vous une autre question ?" },
  { speaker: 'client', text: " Non merci, je vais juste aller vendre mon rein je reviens ! " },
  { speaker: 'employee', text: " D'accord bonne journée ! " }
];

export default function Apple() {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(-1);
  const [displayedText, setDisplayedText] = useState('');
  const [showDialogue, setShowDialogue] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [audio] = useState(() => new Audio(phoneSound));
  const [animationDone, setAnimationDone] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  const navigate = useNavigate();
  const currentSpeaker = dialogues[currentDialogueIndex]?.speaker || null;

  useEffect(() => {
    if (showDialogue && currentDialogueIndex >= 0 && currentDialogueIndex < dialogues.length) {
      let i = 0;
      const fullText = dialogues[currentDialogueIndex]?.text || '';
      setDisplayedText('');
      setIsTyping(true);

      const interval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [currentDialogueIndex, showDialogue]);

  const handleStart = () => {
    setShowDialogue(false);
    setCurrentDialogueIndex(-1);
    setAnimationDone(false);
    setDisplayedText('');
    audio.pause();
    audio.currentTime = 0;

    setPlayAnimation(true);

    setTimeout(() => {
      audio.play();
    }, 1800);

    setTimeout(() => {
      setShowDialogue(true);
      setCurrentDialogueIndex(0);
      setAnimationDone(true);
      setPlayAnimation(false);
    }, 3000);
  };

  const handleNext = () => {
    if (isTyping) return;
    if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  const handleLaunchQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="apple-page">
      <h1>Service Client Apple</h1>
      <p>Appuyez sur "Démarrer l'animation" puis sur "Suivant" pour faire avancer la discussion.</p>

      {!animationDone ? (
        <button className="start-btn" onClick={handleStart}>Démarrer l'animation</button>
      ) : (
        <>
          {currentDialogueIndex < dialogues.length - 1 ? (
            <button className="next-btn" onClick={handleNext} disabled={isTyping}>
              Suivant
            </button>
          ) : (
            <button className="start-btn" onClick={handleLaunchQuiz}>
              Lancer le quiz
            </button>
          )}
        </>
      )}

      <div className="animation-container">
        <div className="genius-bar">
          <div className="genius">🧑‍💻</div>
          <div className="label">Employé</div>
        </div>

        <div className={`walkinman-wrapper ${playAnimation ? 'walk' : ''}`}>
          <div className={`walkinman ${playAnimation ? 'spin' : ''}`}>🧍‍♂️</div>
          <div className="label" style={{ marginTop: '6px', fontWeight: 'bold', fontSize: '0.9rem' }}>Client</div>
        </div>

        <div className={`phone ${playAnimation ? 'phone-drop' : ''}`}>📱</div>

        {animationDone && showDialogue && currentDialogueIndex >= 0 && (
          <div
            className={`speech-bubble ${
              currentSpeaker === 'client' ? 'client-bubble' : 'employee-bubble'
            }`}
          >
            {displayedText || ''}
          </div>
        )}
      </div>
    </div>
  );
}
