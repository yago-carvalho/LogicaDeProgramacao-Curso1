const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2; // AND
console.log('Vamos comprar a TV 50"? ', comprarTV50); 

let comprarTV32 = t1 !== t2; // XOR
console.log('Vamos comprar a TV 32"?', comprarTV32);

let tomarSorvete = t1 || t2; // OU
console.log('Vamos comprar sorvete?', tomarSorvete); 

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa?', ficarEmCasa); 

//Se colocar uma vírgula, não precisa do sinal de concatenação;

