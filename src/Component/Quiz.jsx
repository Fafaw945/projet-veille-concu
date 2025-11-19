import React, { useState, useEffect, useRef } from "react";
import questions from "../data/questions";
import initialPlayers from "../data/players";
import ticTacSoundFile from "../assets/tic-tac.mp3";
import ringSoundFile from "../assets/ring.mp3";

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [players, setPlayers] = useState(initialPlayers);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showAnswer, setShowAnswer] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Réfs sons
  const ticTacAudio = useRef(new Audio(ticTacSoundFile));
  const ringAudio = useRef(new Audio(ringSoundFile));

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (!started) return;

    setTimeLeft(10);
    setShowAnswer(false);
    setAnimating(false);

    // Reset sons
    ticTacAudio.current.pause();
    ticTacAudio.current.currentTime = 0;
    ringAudio.current.pause();
    ringAudio.current.currentTime = 0;

    // Joue tic tac UNE FOIS au début de la question
    ticTacAudio.current.play().catch(() => {});

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setShowAnswer(true);
          // Stop tic tac quand on joue ring
          ticTacAudio.current.pause();
          ringAudio.current.play().catch(() => {});
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      ticTacAudio.current.pause();
      ticTacAudio.current.currentTime = 0;
    };
  }, [currentQuestionIndex, started]);

  const addPoint = (playerIndex) => {
    if (!showAnswer) return;
    const updated = [...players];
    updated[playerIndex].score += 1;
    setPlayers(updated);
  };

  const nextQuestion = () => {
    if (!showAnswer) {
      alert("⏳ Attendez la fin du temps pour passer à la question suivante.");
      return;
    }
    setAnimating(true);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("🎉 Quiz terminé !");
        setStarted(false);
        setCurrentQuestionIndex(0);
        setPlayers(initialPlayers.map(p => ({ ...p, score: 0 })));
      }
      setAnimating(false);
    }, 800);
  };

  if (!started) {
    return (
      <div
        style={{
          height: "100vh", // prend toute la hauteur de l'écran
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // centre verticalement
    alignItems: "center",     // centre horizontalement
    textAlign: "center",
    fontFamily: "Segoe UI, sans-serif",
    padding: 20,
        }}
      >
        <h1>Bienvenue au Quiz</h1>
        <p>Les règles sont très simple, vous avez 10 secondes pour écrire sur le chat la réponse et j'attriburais les points, parfois je vous laisserais un peu plus de temps pour finir d'écrire mais je vous le dirais, Are You Readyyyyyyyyy ????</p>
        <button
          onClick={() => setStarted(true)}
          style={{
            padding: "12px 24px",
            fontSize: "1.2rem",
            borderRadius: 12,
            border: "none",
            backgroundColor: "#2196f3",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Lancer le quiz
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        fontFamily: "Segoe UI, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={nextQuestion}
        disabled={animating || !showAnswer}
        style={{
          position: "fixed",
          top: 70, // hauteur abaissée de 50px par rapport à avant (20 -> 70)
          left: 20,
          padding: "10px 16px",
          fontSize: "1rem",
          borderRadius: 8,
          border: "none",
          backgroundColor: showAnswer ? "#2196f3" : "#aaa",
          color: "white",
          fontWeight: "bold",
          cursor: showAnswer ? "pointer" : "not-allowed",
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        Question suivante
      </button>

      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 20,
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          maxWidth: 700,
          width: "100%",
          textAlign: "center",
          overflow: "hidden",
          marginTop: 70,
        }}
      >
        <h2 style={{ marginBottom: 10 }}>
          Question {currentQuestionIndex + 1} / {questions.length}
        </h2>

        <div
          className={animating ? "animate-slide-shake" : "animate-zoom-in"}
          style={{
            marginBottom: 30,
            display: "inline-block",
            transformOrigin: "center",
            transition: "transform 0.3s ease",
          }}
        >
          <h3>{currentQuestion.question}</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: 15 }}>
            {currentQuestion.options?.map((option, i) => (
              <li
                key={i}
                style={{
                  marginBottom: 12,
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  backgroundColor:
                    showAnswer && option === currentQuestion.correctAnswer
                      ? "#d4edda"
                      : "#f0f4f8",
                  fontWeight:
                    showAnswer && option === currentQuestion.correctAnswer
                      ? "bold"
                      : "normal",
                  transition: "0.3s",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            margin: "0 auto 30px",
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "6px solid #4a90e2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: "bold",
            color: "#4a90e2",
          }}
        >
          {timeLeft}
        </div>

        <h3 style={{ marginTop: 30 }}>Joueurs</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {players.map((player, index) => (
            <li
              key={index}
              style={{
                marginBottom: 12,
                background: "#fdfdfd",
                padding: "10px 15px",
                borderRadius: 10,
                border: "1px solid #e0e0e0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                <strong>{player.name}</strong> : {player.score} pt
                {player.score !== 1 ? "s" : ""}
              </span>
              <button
                onClick={() => addPoint(index)}
                disabled={!showAnswer}
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "none",
                  backgroundColor: showAnswer ? "#4caf50" : "#aaa",
                  color: "white",
                  cursor: showAnswer ? "pointer" : "not-allowed",
                  fontWeight: "bold",
                }}
              >
                +1
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style>
        {`
          .animate-slide-shake {
            animation: slideShake 0.8s ease forwards;
          }
          .animate-zoom-in {
            animation: zoomIn 0.3s ease forwards;
          }

          @keyframes slideShake {
            0% {
              transform: translateX(0) rotate(0deg);
            }
            30% {
              transform: translateX(-30px) rotate(-5deg);
            }
            50% {
              transform: translateX(-15px) rotate(3deg);
            }
            70% {
              transform: translateX(-25px) rotate(-3deg);
            }
            100% {
              transform: translateX(-100%) rotate(0deg);
              opacity: 0;
            }
          }

          @keyframes zoomIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Quiz;
