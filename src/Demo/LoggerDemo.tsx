import React, { useEffect, useRef } from 'react';
import UseLogger from '../DesignSystem/UseLogger';

const LoggerDemo = () => {
  const logger = useRef(
    UseLogger({
      fileName: 'app_log',
      saveFileNum: 10,
      dateFormat: 'yyyy/MM/dd-HH:mm:ss',
      logsDirectory: 'logs/',
      saveLevel: 'verbose',
      printLevel: 'verbose',
    })
  ).current;

  useEffect(() => {
    const message = 'Logger is now active!';
    logger.verbose(message);
  }, [logger]);

  return <div>Demo Test</div>;
};

export default LoggerDemo;
