var name = prompt('Qual è il tuo nome?');
var surname = prompt('Qual è il tuo cognome?');
var favoriteColor = prompt('Ciao ' + name + '! Qual è il tuo colore preferito?');
var annoCorrente = new Date().getFullYear();
var generatedPassword = document.getElementById('output');
generatedPassword.innerText = name + surname + favoriteColor + annoCorrente;
