//let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let floor = 5;
if (floor < 1) {
    console.log('Choisi un nombre positif')
} else {
    for (let count = 1; count <= floor; count=count+1) {
        let space="";
        for (let step = count; step < floor; step++) {
            space += " ";
        }
        let tag="";

        for (let step = 0; step < count; step++) {
            tag += "#";
        }
        console.log(space+tag);
    }
}