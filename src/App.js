import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatBubble from './components/ChatBubble'

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat between DIDI and GOGO</h1>
      </header>
      <main className="App-main">
        <ChatBubble sender='Vladimir' body='why are you arguing with me' time='2018-05-29T22:49:06+00:00'/>
      </main>
    </div>
  );
};

export default App;
