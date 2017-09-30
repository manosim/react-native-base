// prettier-ignore
global.requestAnimationFrame = callback => { // eslint-disable-line
  setTimeout(callback, 0);
};
