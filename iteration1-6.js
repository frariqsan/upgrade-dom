//Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const data = document.querySelectorAll('[data-function="testMe"]');
for (let i = 0; i < data.length; i++) {
    const dataSpan = data[2];
    console.log(dataSpan);
}