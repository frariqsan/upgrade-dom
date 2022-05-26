//Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const myUl = document.createElement('ul');

for (const app of apps) {
    const myLi = document.createElement('li');
    myUl.appendChild(myLi);
    myLi.innerText = app;
    
}

document.body.appendChild(myUl);