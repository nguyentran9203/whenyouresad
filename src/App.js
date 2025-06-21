// src/App.js
import React, { useState } from 'react';
import './App.css';

const Notes = [
  { message: "You're amazing just the way you are 💕",
    image: "https://github.com/nguyentran9203/whenyouresad/blob/gh-pages/miffyflowers.jpg"},
  {
    message: "You're the best part of my day 🥰",
    image: "https://github.com/nguyentran9203/whenyouresad/blob/gh-pages/rilakkuma.gif"
  },
  {
    message: "I’m so lucky to have you 💖",
    image: "https://github.com/nguyentran9203/whenyouresad/blob/gh-pages/miffy-and-boris.jpg"
  },
  {
    message: "If I were a cat, I’d curl up next to you forever 🐱",
    image: "https://github.com/nguyentran9203/whenyouresad/blob/gh-pages/pusheensleep.gif"
  },
  {
    message: "Miss you already :<",
    image: "https://github.com/nguyentran9203/whenyouresad/blob/gh-pages/miffysad.jpg"
  }
];

function App() {
  const [note, setNote] = useState(
    Notes[Math.floor(Math.random() * Notes.length)]
  );

  const newNote = () => {
    const next = Notes[Math.floor(Math.random() * Notes.length)];
    setNote(next);
  };

  return (
    <div className="app">
      <h1>Hewwo :3</h1>
      <div className="note-card">
        <img src={note.image} alt="Cute visual" className="note-image" />
        <p>{note.message}</p>
        <button onClick={newNote}>Click me!</button>
      </div>
    </div>
  );
}

export default App;
