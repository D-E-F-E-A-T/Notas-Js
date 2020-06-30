const nome = 'Raryssa';
const concatenacao = "Olá " + nome + " !"

//console.log(concatenacao);

const template = `
 Olá  
 ${nome}! `

  console.log(concatenacao, template);
 // expressões...

 console.log (`1 + 1 = ${1 + 1}` );

 const up = texto => texto.toUppercase();
 console.log(` Ei... ${up('cuidado')}!` )