import { message as antdMessage } from 'antd';
import { promisify, Callback } from 'es6-promisify';

const createMessage = (type: string) => {
  return (
    content: React.ReactNode,
    duration: number | (() => void) | undefined = 1,
    cb: Callback<any>,
  ) => {
    antdMessage[type](content, duration, () => {
      cb(null, null);
    });
  };
};

const message = {
  info: (
    content: React.ReactNode,
    duration?: number | (() => void) | undefined,
  ) => promisify<any, any, any>(createMessage('info'))(content, duration),
  success: (
    content: React.ReactNode,
    duration?: number | (() => void) | undefined,
  ) => promisify<any, any, any>(createMessage('success'))(content, duration),
  error: (
    content: React.ReactNode,
    duration?: number | (() => void) | undefined,
  ) => promisify<any, any, any>(createMessage('error'))(content, duration),
  warn: (
    content: React.ReactNode,
    duration?: number | (() => void) | undefined,
  ) => promisify<any, any, any>(createMessage('warn'))(content, duration),
  warning: (
    content: React.ReactNode,
    duration?: number | (() => void) | undefined,
  ) => promisify<any, any, any>(createMessage('warning'))(content, duration),
  loading: (
    content: React.ReactNode,
    duration?: number | (() => void) | undefined,
  ) => promisify<any, any, any>(createMessage('loading'))(content, duration),
};

export default message;
