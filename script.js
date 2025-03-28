let titulo = document.getElementById("titulo");
console.log(titulo);

let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);

let futebol = document.getElementsByClassName("fut");
console.log(futebol[0].textContent);

let basquete = document.getElementsByClassName("bas");
console.log(basquete[0].textContent);

let volei = document.getElementsByClassName("vol");
console.log(volei[0].textContent);

let tenis = document.getElementsByClassName("ten");
console.log(tenis[0].textContent);

let judo = document.getElementsByClassName("jud");
console.log(judo[0].textContent);

let ballet = document.getElementsByClassName("ba");
console.log(ballet[0].textContent);

let tituloQS = document.querySelector("#titulo");
let listaQS = document.querySelector(".fut");
let lista2QS = document.querySelector(".bas");
let lista3QS = document.querySelector(".vol");
let lista4QS = document.querySelector(".ten");
let lista5QS = document.querySelector(".jud");
let lista6QS = document.querySelector(".ba");

console.log("Exibindo com Query Selector" + tituloQS.textContent);
console.log("Exibindo com QS a lista" + listaQS.textContent);
console.log("Exibindo com QS a lista" + lista2QS.textContent);
console.log("Exibindo com QS a lista" + lista3QS.textContent);
console.log("Exibindo com QS a lista" + lista4QS.textContent);
console.log("Exibindo com QS a lista" + lista5QS.textContent);
console.log("Exibindo com QS a lista" + lista6QS.textContent);