import { state } from './state.js';
import { startTimer } from './timer.js';

const btnStart = document.querySelector('.control__btn_start');
const btnStop = document.querySelector('.control__btn_stop');

export const initControl = () => {
  btnStart.addEventListener('click', () => {
    if (state.isActive) {
      clearTimeout(state.timerId);
      state.isActive = false;
      btnStart.textContent = 'Старт';
    } else {
      state.isActive = true;
      btnStart.textContent = 'Пауза';
      startTimer();
    }
  });
};
