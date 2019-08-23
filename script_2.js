//2.2.1 Calculs rapides

// Un prompt s'affiche avec la question suivante
//"De quel nombre veut tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
//"Le résultat est : 24"

let facto=1;
let fac=1;
let factorielle=1;
let nombre = prompt("Salut, bienvenue dans ma super pyramide! Combien d'étages veux-tu ?");

while(fac!=nombre){
    facto=factorielle;
    fac=fac+1;
    factorielle=facto*fac;
}
console.log(`Le résultat est : ${factorielle}`);