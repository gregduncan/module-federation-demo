import { useEffect, useState } from 'react';

import type { EventEmitterLike } from '../services/eventEmitter';

type NotificationPayload = {
  type: string;
  title: string;
  message: string;
};

type NotificationModalProps = {
  emitter: EventEmitterLike;
};

function NotificationModal({ emitter }: NotificationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('info');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleNotification = (payload: NotificationPayload) => {
      console.log('Notification received:', payload);
      setType(payload.type);
      setTitle(payload.title);
      setMessage(payload.message);
      setIsOpen(true);
    };

    emitter.on('notification', handleNotification);

    return () => {
      emitter.off('notification', handleNotification);
    };
  }, [emitter]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: type === 'success' ? '#48bb78' : '#4299e1',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '300px',
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{title}</div>
      <div>{message}</div>
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={handleClose}
      >
        ✕
      </button>
    </div>
  );
}

export default NotificationModal;
