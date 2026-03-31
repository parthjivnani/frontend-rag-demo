import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'RAG Assistant';

const config = {
  initialMessages: [
    createChatBotMessage(
      "Hello! \uD83D\uDC4B I'm your RAG Assistant. Ask me anything about the Student Data."
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#fff',
    },
    chatButton: {
      backgroundColor: '#376b7e',
    },
  },
};

export default config;
