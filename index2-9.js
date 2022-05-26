//Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const allDivs = document.querySelectorAll('.fn-insert-here');

for (const div of allDivs) {
    const myP = document.createElement('p');
    myP.innerText = "Voy dentro!";
    div.appendChild(myP);    
}