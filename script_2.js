//2.2.1 Calculs rapides

// Un prompt s'affiche avec la question suivante
//"De quel nombre veut tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
//"Le résultat est : 24"

let nombre;
let facto=1;
let fac=1;
nombre = prompt("De quel nombre veut tu calculer la factorielle ?");

while(fac!=nombre){
    facto=nombre;
    fac=fac+1;
    nombre=facto*fac;
}

console.log(`Le résultat est : ${nombre}`);