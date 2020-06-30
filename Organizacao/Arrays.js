// console.log("Clerton , Raryssa , <3 " .split(','))

const valoresQuaisquer = [7.7 , 8.1 , 5.4, 9.2];
console.log(valoresQuaisquer[0] , valoresQuaisquer[3]);
//console.log(valoresQuaisquer[4] ); // undefined

valoresQuaisquer[4] = 10;  //acrescentando valor no índice 10;

console.log("tamanho é: " + valoresQuaisquer.length); //quantos elementos tem no array
valoresQuaisquer.push ({id:3} , false , null , 'teste'); //adicionando elementos
console.log(valoresQuaisquer);

console.log(valoresQuaisquer.pop()); // pega uma string
delete valoresQuaisquer [0]; // deletar uma posição do array;
console.log(valoresQuaisquer);

console.log(typeof valoresQuaisquer);