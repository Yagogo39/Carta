const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const letter = document.querySelector('.letter');
const question = document.querySelector('.question');

// Mover el botón "No" aleatoriamente
noButton.addEventListener('mouseover', () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

// Mostrar la carta al hacer clic en "Sí"
yesButton.addEventListener('click', () => {
  question.style.display = 'none'; // Esconde la pregunta
  letter.style.display = 'block'; // Muestra la carta
});

