import React from 'react';

export default function Home() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: '80vh',
        padding: '2rem',
        color: '#333',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '12px',
        margin: '2rem auto',
        maxWidth: '900px',
      }}
    >
      <h1 className="display-4 typing mb-4">Bienvenue dans la Veille Concurrentielle</h1>
      <p className="lead mb-3">Oublie les PowerPoints. Ici, on fait les choses autrement.</p>
      <hr style={{ width: '60%', margin: '1.5rem 0' }} />
      <p>
        Je vais vous expliquer dans les grandes lignes, comment fonctionne le service après-vente chez Apple.
        <br />
        Je synthétise parce que sinon c'est hyper long 😅,
        <br />
        mais on va traiter les grands axes ensemble.
        <br />
        Si vous avez des questions, n'hésitez pas à me les poser !
      </p>
    </div>
  );
}
