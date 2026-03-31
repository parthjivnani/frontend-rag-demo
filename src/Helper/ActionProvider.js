import React, { useState, useEffect } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleMessage = async (userMessage) => {
    try {
      let result = await fetch('http://localhost:4001/rag/ask', {
        method: 'POST',
        body: JSON.stringify({ question: userMessage }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await result.json();

      if (!result.ok) {
        setToast(data.error || 'Something went wrong.');
        return;
      }

      const botMessage = createChatBotMessage(data.answer);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      const botMessage = createChatBotMessage('Something went wrong. Please try again.');
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  return (
    <div>
      {toast && (
        <div className="toast-error">
          {toast}
          <button className="toast-close" onClick={() => setToast(null)}>×</button>
        </div>
      )}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
