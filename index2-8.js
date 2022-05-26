//Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.

const myDivs = document.querySelectorAll('div');
const myP = document.createElement('p');
myP.innerText = 'Voy en medio!';

document.body.insertBefore(myP, myDivs[1]);