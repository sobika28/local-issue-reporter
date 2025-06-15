// pages/index.js

import React from 'react';

export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🌍 Local Issue Reporter</h1>
      <p style={styles.subtitle}>Report and track local environmental issues easily.</p>
      <button style={styles.button}>Report an Issue</button>
    </main>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #a8edea, #fed6e3)', // soft nature-inspired gradient
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#004d40',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#00695c',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
