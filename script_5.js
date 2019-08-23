const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

const rentedAtLeastOnce = (listOfBooks) => {
    let rented = false;
    for(let index in listOfBooks) {
        if (listOfBooks[index].rented >= 1) {
            rented = true;
        } else {
            rented = false;
        }
    };
    return rented;
};
console.log(rentedAtLeastOnce(books));

console.log("Quel est livre le plus emprunté ?");

const mostRentedBook = (listOfBooks) => {
    let mostRented = listOfBooks[0];
    for(let index in listOfBooks) {
        if (listOfBooks[index].rented >= mostRented.rented) {
            mostRented = listOfBooks[index];
        }
    };
    console.log(mostRented);
};
mostRentedBook(books);

console.log("Quel est le livre le moins emprunté ?");

const lessRentedBook = (listOfBooks) => {
    let lessRented = listOfBooks[0];
    for(let index in listOfBooks) {
        if (listOfBooks[index].rented <= lessRented.rented) {
            lessRented = listOfBooks[index];
        }
    };
    console.log(lessRented);
};
lessRentedBook(books);

console.log("Trouve le livre avec l'ID: 873495");

for(let index in books) {
    if (books[index].id === 873495) {
        console.log(books[index]);
    }
};

console.log("Supprime le livre avec l'ID: 133712");

let indexToRemove;
for(let index in books) {
    if (books[index].id === 133712) {
        indexToRemove = index;
    }
};
books.splice(indexToRemove, 1);
console.log(books);

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");

const sortedByTitles = (premier, second) => {
	if (premier.title < second.title) {
       return -1; 
    } else if (premier.title === second.title) {
        return 0;
    } else {
        return 1;
    }
}
console.log(books.sort(sortedByTitles));