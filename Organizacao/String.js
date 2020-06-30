// String é uma cadeia de caracteres;
// e no JS pode ser definico com aspas duplas ou simples
// "" '' 

const escola = "Cod3r";

console.log(escola);
console.log(escola.charAt(4)); // mostra qual letra está na posição 5
console.log(escola.charAt(5)); // aqui já retorna um valor vazio (NULL)
console.log(escola.charCodeAt(3)); // Pega o valor onde está na tabela ASC;
console.log(escola.indexOf('r')); //retorna a posição;

console.log(escola.substring(1)); // vai do índice 1 até o final
console.log(escola.substring(0,3)); // do 0 até o índice 3 sem incluir o índice 4

console.log("Escola " .concat(escola) .concat(" !")); // uma função interessante que concatena(junta)
// as strings;
 // .concat() passa algo como parâmetro
 console.log("Escola " + escola + " !"); // ou juntando com +;

console.log(escola.replace(3, 'e')); // .replace faz a correção

// console.log(typeof escola.indexOf);
console.log("Ana, Maria, Pedro" .split(',')); // função que transforma em uma Array
