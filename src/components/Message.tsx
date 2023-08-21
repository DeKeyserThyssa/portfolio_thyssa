import React, {useEffect, useState} from "react";

interface MessageProps {
  messages: string[];
}

function Message({messages}: MessageProps) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [message, setMessage] = useState(randomMessage());

  useEffect(() => {
    setMessage(randomMessage());
  }, [messages]);

  return (
    <div>
      <h3>I ♥️ {message}</h3>
    </div>
  );
}

export default Message;
