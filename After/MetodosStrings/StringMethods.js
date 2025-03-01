let texto = "  JavaScript é incrível!  ";

// 📏 1. length -> Retorna o tamanho da string
console.log("Tamanho:", texto.length); // 24

// 🔠 2. toUpperCase() & toLowerCase() -> Maiúsculas e minúsculas
console.log("Maiúsculas:", texto.toUpperCase());
console.log("Minúsculas:", texto.toLowerCase());

// 🔄 6. replace() & replaceAll() -> Substitui partes da string
console.log("Trocar 'JavaScript' por 'Python':", texto.replace("JavaScript", "Python"));
console.log("Trocar todos os espaços por '-':", texto.replaceAll(" ", "-"));

// 📍 11. indexOf() & lastIndexOf() -> Posição da palavra na string
console.log("IndexOf 'é':", texto.indexOf("é")); // 11
console.log("LastIndexOf 'é':", texto.lastIndexOf("é")); // 11

// ➕ 12. concat() -> Junta strings
let nome = "Flame";
let sobrenome = "Goulart";
console.log("Nome completo:", nome.concat(" ", sobrenome)); // "Flame Goulart"