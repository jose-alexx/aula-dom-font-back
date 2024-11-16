const ul = document.querySelector("ul");

console.log(ul);
console.log(ul.innerHTML);
console.log(ul.innerText);

const li = document.querySelector("li");
li.innerText = "NOVO";
console.log(li);

console.log(li.innerHTML);
console.log(li.innerText);

ul.appendChild(li);