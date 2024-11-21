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
const btnVoltar = document.querySelector("#btn-voltar");
// console.log(btnVerificar);

btnVerificar.addEventListener('click', () => {
    console.log("Clicou!");

    const valor = document.querySelector("input");
    // console.log(valor.value);

    const numero = Number(valor.value);

    const h2 = document.querySelector("h2");

    if (numero % 2 == 0) 
        h2.innerText = `O número ${numero} é par`;
        // console.log("Par");
    else 
        h2.innerText = `O número ${numero} é impar`;
        // console.log("Impar");
    
    const resultado = document.querySelector("#resultado");

    resultado.classList.remove("hide");

    const main = document.querySelector("#main")

    main.classList.add("hide")

    valor.valor = "";
});

btnVoltar.addEventListener('click', () => {
    console.log("Clicou!");
    
    const resultado = document.querySelector("#resultado");

    resultado.classList.add("hide");

    const main = document.querySelector("#main")

    main.classList.remove("hide")

})


