//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const myDiv = document.createElement('div');

for (let i = 0; i < 6; i++) {
    const myP = document.createElement('p');
    myP.innerText = "div" + i
    myDiv.appendChild(myP)
    
}
document.body.appendChild(myDiv);