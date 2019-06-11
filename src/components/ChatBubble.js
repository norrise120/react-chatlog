import React from 'react';
import '../App.css';
import Timestamp from './Timestamp';

const ChatBubble = (props) => {
  // Fill in your code here
  return (
    <section className='chat-entry local'>
      <h3 className='entry-name'>{props.sender}</h3>
      <section className='entry-bubble'>
        <p>{props.body}</p>
        <Timestamp time={props.time} />
      </section>
    </section>
  );
}

export default ChatBubble;
