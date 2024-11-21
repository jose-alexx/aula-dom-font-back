/*const ul = document.querySelector("ul");

console.log(ul);
console.log(ul.innerHTML);
console.log(ul.innerText);

const li = document.querySelector("li");
li.innerText = "NOVO";
console.log(li);

console.log(li.innerHTML);
console.log(li.innerText);

ul.appendChild(li);
*/

const btnVerificar = document.querySelector("#btn-verificar");
// console.log(btnVerificar);

btnVerificar.addEventListener('click', () => {
    console.log("Clicou!");

    const valor = document.querySelector("input");
    // console.log(valor.value);

    const numero = Number(valor.value);

    const h2 = document.querySelector("h2");
    
    if (numero % 2 == 0) 
        console.log("Par");
     else 
        console.log("Impar");
    
    valor.valor = "";
});


