//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const myP = document.createElement('p');
myP.innerText = 'Soy dinámico!';

document.body.appendChild(myP);