import { useEffect, useState } from 'react';

import type { EventEmitterLike } from '../services/eventEmitter';
import {
  NotificationCloseButton,
  NotificationTitle,
  NotificationModal as StyledNotificationModal,
} from '../styles';

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
    <StyledNotificationModal $variant={type}>
      <NotificationTitle>{title}</NotificationTitle>
      <div>{message}</div>
      <NotificationCloseButton onClick={handleClose}>✕</NotificationCloseButton>
    </StyledNotificationModal>
  );
}

export default NotificationModal;
