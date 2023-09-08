import React, {useEffect, useState} from "react";

interface MessageProps {
  messages: string[];
}

function Message({messages}: MessageProps) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  
  const [isClient, setIsClient] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsClient(true);
    setMessage(randomMessage());
  }, []);

  return (
    <div>
      {isClient && <h3>I ❤️ {message}</h3>}
    </div>
  );
}

export default Message;
