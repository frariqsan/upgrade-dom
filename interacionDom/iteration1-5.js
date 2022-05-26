//Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

const data = document.querySelectorAll('[data-function="testMe"]');
for (let i = 0; i < data.length; i++) {
    const dataSpan = data[i];
    console.log(dataSpan);
    
}