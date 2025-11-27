import React from 'react';

function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#e8f0ff',
        minHeight: '200px',
      }}
    >
      <h2 style={{ color: '#003366', textAlign: 'center' }}>
        Explore Amazing Cities
      </h2>

      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        This app shows information about some of the most iconic cities around the world.
      </p>
    </main>
  );
}

export default MainContent;
