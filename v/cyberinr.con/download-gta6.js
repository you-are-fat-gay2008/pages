document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#db');
  if (btn) {
    btn.click();
  } else {
    console.error('Кнопка не найдена');
  }
});
