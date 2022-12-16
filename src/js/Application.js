import EventEmitter from 'eventemitter3';
import Beat from './Beat';

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: 'ready',
    };
  }

  constructor() {
    super();

    const lyrics = ['Ah', 'ha', 'ha', 'ha', "stayin' alive", "stayin' alive"];
    let count = 0;

    this._beat = new Beat();

    this._beat.addEventListener(Beat.events.BIT, () => {
      this._create(lyrics[count]);
      count++;

      if (count === lyrics.length) {
        count = 0;
      }
    });

    this.emit(Application.events.READY);
  }

  _create(l) {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerText = l;
    document.querySelector('.main').appendChild(message);
  }
}
