let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!false);

console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' Texto ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));


console.log("os falsos ... ");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar ...");
console.log(!!('' || null || 0 || 'epa'));

let nome = 'Clerton'
//let nome = '' se fosse isso, no console.log iria retornar vazio;
console.log(nome || "Desconhecido");
