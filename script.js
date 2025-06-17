document.getElementById('no-button').addEventListener('mouseover', function() {
  var noButton = document.getElementById('no-button');
  var maxX = window.innerWidth - noButton.offsetWidth;
  var maxY = window.innerHeight - noButton.offsetHeight;

  // Cambiar la posición del botón aleatoriamente
  var randomX = Math.random() * maxX;
  var randomY = Math.random() * maxY;

  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
});

document.getElementById('yes-button').addEventListener('click', function() {
  document.querySelector('.letter').style.display = 'block';
  document.querySelector('.question').style.display = 'none';
});

