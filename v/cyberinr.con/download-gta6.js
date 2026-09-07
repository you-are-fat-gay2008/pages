document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#db');
  if (btn) {
    btn.click();
  } else {
    console.error('Кнопка не найдена');
  }
  const btna = document.querySelector('#db_a');
  if (btna) {
    btna.click();
  } else {
    console.error('Кнопка не найдена');
  }
});
