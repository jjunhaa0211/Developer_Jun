import React, { useState, useEffect } from 'react';

type Level = 'verbose' | 'debug' | 'warning' | 'error' | 'test';

type LoggerConfig = {
  fileName?: string;
  saveFileNum?: number;
  dateFormat?: string;
  logsDirectory?: string;
  saveLevel: Level;
  printLevel: Level;
};

const UseLogger = ({
  fileName = 'app_log',
  saveFileNum = 10,
  dateFormat = 'yyyy/MM/dd-HH:mm:ss',
  logsDirectory = 'logs/',
  saveLevel = 'verbose',
  printLevel = 'verbose',
}: LoggerConfig) => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    console.log(`Logs are being saved at ${logsDirectory}`);
  }, [logsDirectory]);

  const getTime = (): string => {
    const now = new Date();
    return now.toISOString();
  };

  const isSavable = (level: Level): boolean => {
    const levels = ['verbose', 'debug', 'warning', 'error', 'test'];
    return levels.indexOf(saveLevel) <= levels.indexOf(level);
  };

  const isPrintable = (level: Level): boolean => {
    const levels = ['verbose', 'debug', 'warning', 'error', 'test'];
    return levels.indexOf(printLevel) <= levels.indexOf(level);
  };

  const logMessage = (message: string, level: Level): void => {
    const logEntry = `${getTime()} [${level.toUpperCase()}]: ${message}`;
    if (isPrintable(level)) {
      console.log(logEntry);
    }
    if (isSavable(level)) {
      setLogs((prevLogs) => [...prevLogs, logEntry]);
      console.log(`Saving log: ${logEntry}`);
    }
  };

  return {
    verbose: (message: string) => logMessage(message, 'verbose'),
    debug: (message: string) => logMessage(message, 'debug'),
    warning: (message: string) => logMessage(message, 'warning'),
    error: (message: string) => logMessage(message, 'error'),
    test: (message: string) => logMessage(message, 'test'),
  };
};

export default UseLogger;
