import config from '../Helper/config';
import MessageParser from '../Helper/MessageParser';
import ActionProvider from '../Helper/ActionProvider';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './chatBot.css';

const ChatBot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default ChatBot;
