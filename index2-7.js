//Elimina todos los nodos que tengan la clase .fn-remove-me
const myPs = document.querySelectorAll('.fn-remove-me');

for (const myP of myPs) {
    myP.remove();
    
}