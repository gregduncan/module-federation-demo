import { EventEmitter } from 'tseep';

export type EventHandler<T = unknown> = (data: T) => void;

export type EventEmitterLike = {
  emit: <T = unknown>(event: string, data?: T) => void;
  on: <T = unknown>(event: string, callback: EventHandler<T>) => void;
  off: <T = unknown>(event: string, callback: EventHandler<T>) => void;
};

class EventEmitterSingleton {
  private static instance: EventEmitterSingleton | null = null;
  private emitter!: EventEmitter;

  constructor() {
    if (EventEmitterSingleton.instance) {
      return EventEmitterSingleton.instance;
    }

    this.emitter = new EventEmitter();
    EventEmitterSingleton.instance = this;
  }

  emit<T = unknown>(event: string, data?: T) {
    this.emitter.emit(event, data);
  }

  on<T = unknown>(event: string, callback: EventHandler<T>) {
    this.emitter.on(event, callback);
  }

  off<T = unknown>(event: string, callback: EventHandler<T>) {
    this.emitter.off(event, callback);
  }
}

const emitter: EventEmitterLike = new EventEmitterSingleton();
Object.freeze(emitter);

export default emitter;
