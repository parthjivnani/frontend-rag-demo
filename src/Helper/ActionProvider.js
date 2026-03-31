import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = async (userMessage) => {
    try {
      let result = await fetch('http://localhost:4001/rag/ask', {
        method: 'POST',
        body: JSON.stringify({ question: userMessage }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      result = await result.json();
      const message = result.answer;
      const botMessage = createChatBotMessage(message);

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
