const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user1 = { name: 'Lorenzo', surname: 'Verdi' };
const user2 = { name: 'Silvia', surname: 'Gialli' };

/**
 * ESERCIZIO
 * 
 * Clona l'array 'users' e aggiungi alla fine dell'array
 * gli oggetti 'user1' e 'user2'
 * 
 * GOAL
 
[
  {"name":"Fabio","surname":"Biondi"},
  {"name":"Mario","surname":"Rossi"},
  {"name":"Lorenzo","surname":"Verdi"},
  {"name":"Silvia","surname":"Gialli"}
]
 */

export const result = [...users,user1,user2] // <== MODIFICA QUESTA LINEA

//console.log(result);
const abc =  JSON.stringify(result);
console.log(abc)
document.querySelector('#output').innerHTML = JSON.stringify(result);
