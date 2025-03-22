let codigoCofre = Math.floor(Math.random() * 10000); // Garante 4 dígitos (0 a 9999)
let numero = 0;

while (numero !== codigoCofre) {
    console.log('Testando senha: ' + String(numero).padStart(4, '0'));
    numero++;
}

console.log(`🔥 Cofre hackeado! A senha é ${String(codigoCofre).padStart(4, '0')}`);
console.log(`Foram necessárias ${numero} tentativas.`);
