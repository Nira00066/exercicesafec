let name = ' Nina';
let lastName = ' Lopez';

let messageLocal = "Bonjours, je m'appelle ";

console.log(messageLocal,name + lastName);

const anneeNaissance= 2001;
let anneeActuelle= 2025 ;
let Age =anneeActuelle - anneeNaissance; 

console.log(`Tu as ${ Age}ans.`);

// Defis 4 

let a = 12; 
let b = 8;

let valeur = a + b; 

console.log(` la somme est de ${valeur}`);

// Defis 5 

let fullName = name + lastName;

console.log(fullName);

name = 'cassandra';

console.log(name);

// nomralement ca s'affiche dans la consol 
console.log(name + lastName);
alert("test" + fullName);

console.log(Age);
Age += 1; 
console.log(Age);

const PI = 3.14;

console.log(PI);

PI= 3; 

console.log(PI);

// cela donne erreurs  car const n'est pas un valeur changante 'Uncaught TypeError: invalid assignment to const 'PI'


