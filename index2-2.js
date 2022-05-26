//Inserta dinamicamente en un html un div que contenga una p con javascript.
const myP = document.createElement('p');
const myDiv = document.createElement('div');

myDiv.appendChild(myP);
document.body.appendChild(myDiv);
