import React from 'react';
import styled from 'styled-components';
import { IAlertOptions } from './types';

interface AlertManagerProps {
  options: IAlertOptions;
  closeAlert: () => void;
}

const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const AlertBox = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  text-align: center;
`;

const AlertManager: React.FC<AlertManagerProps> = ({ options, closeAlert }) => {
  return (
    <AlertOverlay onClick={closeAlert}>
      <AlertBox onClick={(e) => e.stopPropagation()}>
        {options.title && <h1>{options.title}</h1>}
        {options.subtitle && <p>{options.subtitle}</p>}
        {/* Icon can be further implemented */}
      </AlertBox>
    </AlertOverlay>
  );
};

export default AlertManager;
