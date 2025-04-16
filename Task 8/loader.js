const loaderFill = document.getElementById('loader-fill');
let width = 0;

const interval = setInterval(() => {
  width += 1;
  loaderFill.style.width = width + '%';

  if (width >= 100) {
    clearInterval(interval);
    document.getElementById('loader').style.display = 'none';
    document.getElementById('page').classList.remove('invisible');
  }
}, 20); // 100% за 2 секунды (100 шагов по 20 мс)
