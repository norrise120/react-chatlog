import React from 'react';
import '../App.css';
import Timestamp from './Timestamp';

const ChatBubble = (props) => {
  const {sender, body, time} = props

  let senderClass = 'chat-entry local'
  if (sender === 'Estragon') {
    senderClass = 'chat-entry remote'
  }

  return (
    <section className={senderClass}>
      <h3 className='entry-name'>{sender}</h3>
      <section className='entry-bubble'>
        <p>{body}</p>
        <Timestamp time={time} />
      </section>
    </section>
  );
}

export default ChatBubble;
