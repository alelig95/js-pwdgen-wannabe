var answer = prompt('Sei pronto? Se riesci a battere il computer riceverai una copia di Cyberpunk 2077 in regalo! Scegli: carta, sasso o forbice?');
var defeat = document.getElementById('output');

if(answer === 'carta') {
  defeat.innerText = 'Mi dispiace, hai perso! Il computer ha scelto Forbice. Ritenta, sarai più fortunato.';
}

if(answer === 'sasso') {
  defeat.innerText = 'Mi dispiace, hai perso! Il computer ha scelto Carta. Ritenta, sarai più fortunato.';
}

if(answer === 'forbice') {
  defeat.innerText = 'Mi dispiace, hai perso! Il computer ha scelto Sasso. Ritenta, sarai più fortunato.';
}
