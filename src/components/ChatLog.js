import React from 'react';
import '../App.css';
import ChatBubble from './ChatBubble';

const generateChatBubbleComponents = (events) => {
  return events.map((event) => {
    const { sender, body, time } = event;
    return (<ChatBubble
      sender={sender}
      body={body}
      time={time}
    />);
  });
}

const ChatLog = (props) => {
  const { bubbles } = props
  
  const bubbleComponents = generateChatBubbleComponents(bubbles)
  return (
    <section>{bubbleComponents}</section>
  );
}





export default ChatLog;