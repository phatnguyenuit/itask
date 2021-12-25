import { OptionsObject } from 'notistack';
import { EventListener } from './eventListener';

class ToastService {
  private toastEventListener = new EventListener<
    [string, OptionsObject['variant']]
  >();

  addListener(
    listener: (message: string, variant: OptionsObject['variant']) => void,
  ) {
    this.toastEventListener.addListener(listener);
  }

  removeListener(
    listener: (message: string, variant: OptionsObject['variant']) => void,
  ) {
    this.toastEventListener.removeListener(listener);
  }

  notify(message: string, variant: OptionsObject['variant']) {
    this.toastEventListener.raiseEvent(message, variant);
  }
}

const toastService = new ToastService();

export default toastService;
