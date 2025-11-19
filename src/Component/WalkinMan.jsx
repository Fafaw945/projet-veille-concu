import React from 'react';

export default function WalkinMan({ animate }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '-150px',
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#e0f7fa',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'column',
      userSelect: 'none',
      zIndex: 9999,
    }}>
      {/* Genius Bar */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 160,
        height: 130,
        backgroundColor: '#444',
        borderRadius: 15,
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        paddingTop: 15,
        zIndex: 10,
        boxShadow: '0 0 12px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        Genius Bar
        <div style={{
          width: 60,
          height: 60,
          backgroundColor: '#222',
          borderRadius: '50%',
          boxShadow: 'inset 0 0 0 8px #111',
          marginTop: 12,
          position: 'relative',
        }}>
          {/* Bonhomme derrière Genius Bar */}
          <div style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 90,
            backgroundColor: '#555',
            borderRadius: '20px / 50%',
            boxShadow: 'inset 0 3px 5px rgba(0,0,0,0.3)',
          }}>
            {/* Tête */}
            <div style={{
              width: 40,
              height: 40,
              backgroundColor: '#888',
              borderRadius: '50%',
              position: 'relative',
              top: -20,
              boxShadow: 'inset 0 5px 8px rgba(0,0,0,0.2)',
            }}>
              {/* Yeux */}
              <div style={{
                position: 'absolute',
                top: 12,
                left: 8,
                width: 8,
                height: 8,
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '2px 0 0 white',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bonhomme qui marche */}
      <div
        className={`walker ${animate ? 'walking' : ''}`}
        style={{
          width: 80,
          height: 160,
          marginBottom: 20,
          position: 'relative',
          cursor: animate ? 'default' : 'pointer',
          zIndex: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
          filter: 'drop-shadow(2px 4px 2px rgba(0,0,0,0.15))',
          transform: 'scale(0.9)', // 10% plus petit
          animation: animate ? 'walk-forward 6s forwards' : 'none',
        }}
      >
        {/* Tête */}
        <div className="head" style={{
          width: 70,
          height: 70,
          backgroundColor: '#f5c6aa',
          borderRadius: '50%',
          margin: '0 auto',
          position: 'relative',
          boxShadow: 'inset 0 6px 10px rgba(0,0,0,0.2)',
        }}>
          {/* Yeux */}
          <div style={{
            position: 'absolute',
            top: 25,
            left: 18,
            width: 12,
            height: 12,
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '18px 0 0 white',
          }} />
          {/* Pupilles */}
          <div style={{
            position: 'absolute',
            top: 28,
            left: 23,
            width: 6,
            height: 6,
            backgroundColor: '#333',
            borderRadius: '50%',
            boxShadow: '18px 0 0 #333',
          }} />
          {/* Bouche */}
          <div style={{
            position: 'absolute',
            bottom: 18,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 26,
            height: 8,
            borderBottom: '3px solid #a44',
            borderRadius: '0 0 14px 14px',
          }} />
        </div>

        {/* Corps */}
        <div style={{
          width: 40,
          height: 70,
          backgroundColor: '#3b82f6',
          margin: '10px auto 0 auto',
          borderRadius: 15,
          boxShadow: 'inset 0 8px 10px rgba(255,255,255,0.3)',
          position: 'relative',
        }}>
          {/* Bras gauche */}
          <div style={{
            position: 'absolute',
            top: 5,
            left: -20,
            width: 20,
            height: 70,
            backgroundColor: '#2563eb',
            borderRadius: 15,
            boxShadow: 'inset 0 5px 5px rgba(255,255,255,0.3)',
            transformOrigin: 'top center',
          }} className="left-arm" />
          {/* Bras droit */}
          <div style={{
            position: 'absolute',
            top: 5,
            right: -20,
            width: 20,
            height: 70,
            backgroundColor: '#2563eb',
            borderRadius: 15,
            boxShadow: 'inset 0 5px 5px rgba(255,255,255,0.3)',
            transformOrigin: 'top center',
          }} className="right-arm" />
        </div>

        {/* Jambes */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 15,
          width: 80,
          position: 'relative',
        }}>
          <div className="leg left-leg" style={{
            width: 20,
            height: 70,
            backgroundColor: '#1e40af',
            borderRadius: 15,
            transformOrigin: 'top center',
            boxShadow: 'inset 0 5px 10px rgba(255,255,255,0.2)',
          }} />
          <div className="leg right-leg" style={{
            width: 20,
            height: 70,
            backgroundColor: '#1e40af',
            borderRadius: 15,
            transformOrigin: 'top center',
            boxShadow: 'inset 0 5px 10px rgba(255,255,255,0.2)',
          }} />
        </div>

        {/* Téléphone qui tombe */}
        <div className="phone" style={{
          position: 'absolute',
          width: 15,
          height: 25,
          backgroundColor: '#222',
          borderRadius: 4,
          top: 100,
          left: 10,
          opacity: 0,
          boxShadow: '0 0 6px 1px #444',
          filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.4))',
          animation: animate ? 'phone-fall 6s forwards' : 'none',
          animationDelay: '2.5s',
          zIndex: 30,
        }} />
      </div>

      <style>{`
        @keyframes walk-forward {
          0% { transform: translateY(0) scale(0.9) rotate(0deg); opacity: 1; }
          40% { transform: translateY(-100vh) scale(0.9) rotate(0deg); }
          50% { transform: translateY(-50vh) scale(0.9) rotate(360deg); }
          60% { transform: translateY(-100vh) scale(0.9) rotate(0deg); }
          90% { transform: translateY(-160vh) scale(0.9) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-170vh) scale(0.9) rotate(0deg); opacity: 0; }
        }

        @keyframes phone-fall {
          0% {
            opacity: 1;
            top: 100px;
            left: 10px;
            transform: rotate(0deg);
          }
          30% {
            top: 140px;
            left: 5px;
            transform: rotate(60deg);
          }
          60% {
            top: 190px;
            left: 20px;
            transform: rotate(120deg);
            opacity: 1;
          }
          100% {
            top: 300px;
            left: 15px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
