import React from 'react';

function LandingPage({ onStartVisualizer }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Wall-to-Wall Visualizer</h1>
      <p style={styles.description}>
        Upload an image, select four points to define a wall, and visualize how a texture would look on it.
      </p>
      <button style={styles.button} onClick={onStartVisualizer}>
        Start Visualizer
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f2f5',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3em',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '30px',
    maxWidth: '600px',
    lineHeight: '1.5',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1.1em',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default LandingPage;