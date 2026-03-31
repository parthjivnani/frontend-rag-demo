import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'RAG Assistant';

const config = {
  initialMessages: [createChatBotMessage('Hello! Ask me anything about the Student Data.')],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
