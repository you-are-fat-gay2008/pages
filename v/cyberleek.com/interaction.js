const button = document.getElementById('downloadbutton');

button.addEventListener('click', () => {
  // Браузер сам добавит этот файл к текущему пути
  window.location.href = 'download.html'; 
});


// const button = document.getElementById('downloadbutton');

// button.addEventListener('click', () => {
//   window.location.href = '/download.html'; 
// });
