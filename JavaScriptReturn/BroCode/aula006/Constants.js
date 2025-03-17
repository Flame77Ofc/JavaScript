// const = uma variável que não pode ser trocada
// let pi = 3.1415;
const PI = 3.1415;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
     radius = document.getElementById("myText").value
     radius = Number(radius)
     circumference = 2 * PI * radius
     document.getElementById("myH3").textContent = circumference + 'cm';
}