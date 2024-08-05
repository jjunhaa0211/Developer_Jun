// AlertDemo.tsx
import React from 'react';
import AlertButton from '../DesignSystem/Aleat/AlertButton';
import { AlertProvider } from '../DesignSystem/Aleat/AlertContext';

const AleatDemo: React.FC = () => {
  return (
    <AlertProvider>
      <div>
        <h1>Hello, Alert!</h1>
        <AlertButton/>
      </div>
    </AlertProvider>
  );
};

export default AleatDemo;
