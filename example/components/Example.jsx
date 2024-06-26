import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true
  }
];

const Example = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default Example;
