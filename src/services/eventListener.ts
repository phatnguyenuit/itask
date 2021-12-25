type Listener<TArgs extends any[]> = (...args: TArgs) => void;

export class EventListener<TArgs extends any[]> {
  private listeners: Listener<TArgs>[] = [];

  addListener(listener: Listener<TArgs>) {
    this.listeners.push(listener);
  }

  raiseEvent(...args: TArgs) {
    this.listeners.forEach((listener) => listener?.(...args));
  }

  removeListener(listener: Listener<TArgs>) {
    const index = this.listeners.findIndex((l) => l === listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
}
