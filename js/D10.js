/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
// let sum crea la variabile, a questa aggiungo i valori sommati come richiesto
console.log(sum);

// il suo console log darà 30

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);
// let random crea la variabile. Tramite Math.random() genero un numero randomico
// compreso tra 0 e 1 lo moltiplico x 21 per e mettendolo dentro Math.floor()
// abbasso per difetto, generando così un numero tra 0 e 20 in maniera casuale

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Amedeo",
  surname: "Mignano",
  age: 30,
};

// Creo la variabile a cui assegno l'oggetto con {} all'interno ci vanno proprietà con
// chiave : valore

console.log(me);
// il console log mi da l'oggetto creato

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

// l'operatore delete mi permette di eliminare una proprietà di me.
// in questo caso accedo alla proprietà age con la dot notation.
console.log(me);
// il console log mi da l'oggetto creato senza age

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript"];
//Utilizzo sempre il dot notation e questa volta aggiunto l'array []
console.log(me);
// il console log mi da l'oggetto creato con il nuovo array

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("HTML");
// utilizzo il metodo push per aggiungere "HTML" alla fine dell'array precedentemente creato

console.log(me);
// il console log mi da l'oggetto creato con il nuovo elemento dentro l'array

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
//il metodo pop() elimina l'ultimo elemento di un array

console.log(me);
// il console log mi da l'oggetto creato con l'ultimo elemento dell'array tolto

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  let numero = Math.ceil(Math.random() * 6);
  return numero;
};
//Creo una variabile per la funzione
// All'interno creo una variabile che mi genera il numero randomico
//console loggo il numero creato

dice();
// invoco la funzione

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
//Creo una variabile per la funzione assegnandole
// due parametri (n1,n2)
//con un if metto in comparazione i parametri per vedere e farmi ritornare il più grande

console.log(whoIsBigger(11, 10));
console.log(whoIsBigger(10, 11));
//Qualunque sia la posizione del numero invocando la funziona tornerà console loggato
//il parametro più grande

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (str) => {
  let split = str.split(" ");
  return split;
};
//Creo una variabile per la funzione assegnandole
// un parametro (str), che farà riferimento alla stringa quando la invochiamo
// creo una variabile split in cui utilizzo il metodo split() che splitta le stringhe
// ritorno split

console.log(splitMe("Ciao caro Luca"));
// il console log da due stringhe separate

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, bool) => {
  if (bool === true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
};
//Creo una variabile per la funzione assegnandole
// i parametri (str, bool), che faranno riferimento alla stringa e al
// booleano quando la invochiamo
// con un if valuto se bool è true o false. Se e true, utilizzo il metodo slice
// sulla stringa per togliere la prima lettera e lo ritorno
// altrimenti utilizzo lo stesso metodo per togliere l'ultima

console.log(deleteOne("Gatto", true));
// toglie la prima lettera di "Gatto"
console.log(deleteOne("Gatto", false));
// toglie l'ultima lettera di "Gatto"

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str) => {
  let l = str.replace(/[0-9]/g, "");
  return l.replace(/\s+/g, " ").trim();
};
// creo la variabile per la funzione assegnandole
// il parametro (str), che fa riferimento alla stringa quando la invochiamo
// creo una variabile per togliere i numeri dalla stringa.
// utilizzo il metodo replace() che mi permette di sostituire elementi all'interno
// di una stringa. con /[0-9]/ targhetto i numeri da 0 a 9, la g indica global e
// mi permette di prendere tutti i numeri di una stringa qualora ce ne fossero più di 1.
// sostituisco i numeri con una stringa vuota ""
// fino a qui il procedimento va bene ma sostituendo con stringa vuota qualsiasi numero
// verra sostituito con uno spazio, quindi potremo avere ad esempio "I have  dogs"
// in questo caso allora devo far ritornare un altro elemento senza spazio dalla funzione
// per farlo faccio di nuovo replace su la mia variabile e vado a cercare tutti gli spazi
// con /\s+/g e li sostituisco con uno spazio. a questo aggiungo il metodo trim() che mi
// permette ti togliere gli spazi all'inizio e alla fine di l

console.log(onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// Per verificare se una stringa è una mail devo verificare che ci sia una sola chiocciola
// Che non ci siano punti subito dopo la chiocciola, ma che ce ne sia uno dopo
// Che non ci sia più di una chiocciola
const isThisAnEmail = (str) => {
  const atIndex = str.indexOf("@");
  const atLastIndex = str.lastIndexOf("@");
  const dotIndex = str.indexOf(".");
  // creo la variabile per la funnzione e gli assegno il parametro (str)
  // che fa riferimento alla stringa quando la invochiamo.
  // per valutare se ci sono "@" e ".", utilizzo i metodi indexOf() e lastIndexOf()
  // assegnando la stringa a tre variabili diverse.
  // la prima, atIndex con il metodo indexOf() cercherà la posizione della prima "@"
  // presente nella stringa
  // la seconda atLastIndex con il metodo lastIndexOf()
  // cercherà la posizione dell'ultima "@" nella stringa
  // la terza, dotIndex cercherà il primo "." nella stringa
  // a questo punto faccio due if per porre tutte le condizioni
  if (
    atIndex === -1 || // indexOf() - 1 vuol dire che non trova nulla
    atIndex === 0 || // la mia chiocciola non può avere indice 0 perché non può essere il primo carattere
    atIndex !== atLastIndex || // se il numero dei due indici non coincide allora ci saranno più chiocciole
    atIndex === str.length - 1 // la chiocciola non può essere l'ultimo carattere
  ) {
    return false; // se le condizioni degli if sono rispettate allora la mail è falsa
  }
  if (
    dotIndex === -1 || // indexOf() - 1 vuol dire che non trova nulla
    dotIndex === atIndex + 1 || // il punto non può essere subito dopo @
    dotIndex === str.length - 1 // il punto non può essere alla fine
  ) {
    return false; // se le condizioni degli if sono rispettate allora la mail è falsa
  }
  return true; // altrimenti la mail è vera
};

console.log(isThisAnEmail("amedeo@gmail.com"));
console.log(isThisAnEmail("amedeo,gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const daysOfWeek = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const giorno = new Date();
  return daysOfWeek[giorno.getDay()];
};
// creo la variabile per la funzione
// posso trovare il giorno della settimana con il metodo getDay di date, ma mi restituirà
// un numero. Devo quindi creare un array con i giorni della settimana. Parto da Domenica
// perché getDay 0 = Domenica
// creo una variabile giorno a cui assegno new Date() per invocarlo
// ritorno il giorno della settimana corrispondente all'indice dell'array con il metodo getDay()

console.log("Oggi è", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (n) => {
  let sum = 0;
  const values = [];
  // creo la variabile per la funzione e assegno il parametro (n)
  // creo una variabile che sarà la mia somma sum e le assegno il valore predefinito 0
  // creo il mio array values dove verrano pushati i valori rollati da dice()
  for (let i = 0; i < n; i++) {
    const result = dice();
    values.push(result);
    sum += result;
  }
  // adesso devo ciclare tante volte quante il numero indicato dal parametro con for
  // nel mio for avrò il valore di dice() come variabile result
  // questo lo pusherò nel mio array values (values.push)
  // e poi sommerò il risultato alla mia variabile sum per ogni ciclo
  return {
    sum: sum,
    values: values,
  };
  // finendo il ciclo ritorno un oggetto con sum e values dentro
};

const tiro = rollTheDices(5);
console.log(tiro);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) => {
  const today = new Date();
  const notToday = new Date(date);
  const difference = today - notToday;
  const diffDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  return diffDays;
};
// creo la variabile per la funzione howManyDays a cui assegno la variabile (date)
// per ottenere quello che mi serve devo sottrare la data di oggi con quella dell'argomento
// creo la variabile today con new Date() che mi da la data odierna
// e notToday che con new Date(date) farà riferimento alla data indicata in argomento
// le sottraggo, ma ottengo la differenza in millisecondi. (difference)
// calcolo approssimativamente la differenza in giorni facendo un Math.floor() della differenza
// in ms diviso 1000(ms) * 60(ottengo un minuto) * 60(ottengo un'ora) * 24 (ottengo i giorni)
// in seguito ritorno la differenza in giorni diffDays
console.log(howManyDays("2025-05-25"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = () => {
  const today = new Date();
  const myDay = 9;
  const myMonth = 0;
  // creo una variabile per la funzione
  // calcolo la data di oggi come visto prima
  // assegno una costante myDay con valore 9 per indicare il mio giorno
  //  assegno una costante myMonth con valore 0
  // uso 0 perchè getMonth parte da indice 0 per Gennaio
  if (today.getDate === myDay && today.getMonth === myMonth) {
    return true;
  } else {
    return false;
  }
  // comparo con un if il giorno e il mese di oggi con quello del mio compleanno
  // se entrambi sono veri allora la funziona mi torna vera e quindi è il mio compleanno
};
const birthDay = isTodayMyBirthday();
console.log(birthDay);
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (obj, property) => {
  delete obj[property];
  return obj;
};
// creo la variabile deleteProp per la funzione a cui assegno i parametri
// (obj, property), che saranno rispettivamente il richiamo dell'oggetto e della
// proprietà forniti come argomento al richiamo funzione
// utilizzo delete per andare ad eliminare la proprietà dentro l'oggetto forniti
// ritorno l'oggetto

console.log(deleteProp(me, "age"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = () => {
  let newest = movies[0];

  // creo una variabile per la funzione newestMovie
  // voglio accedere all'indice dei movies assegnando la variabile newest
  // adesso uso il metodo foreach() per ciclare tutto movies attraverso una funzione
  // a cui do il parametro film
  // con un if comparo se l'anno dell'indice di funzione sarà maggiore dell'anno dell'indice
  // di newest allora newest sarà il mio film più recente e lo ritorno

  movies.forEach((film) => {
    if (film.Year > newest.Year) {
      newest = film;
    }
  });
  return newest;
};
console.log(newestMovie());
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = () => {
  return movies.length;
};
//creo la variabile countMovies per la funzione
// essendo movies un array di oggetti, per calcolare il numero mi basta farmi tornare
// dalla funzione la lunghezza di movies stessa
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = () => {
  const year = movies.map((n) => n.Year);
  return year;
};

// creo la variabile onlyTheYears per la funzione
// assegno una variabile year in cui tramite il metodo map() estrapolo da movies
// un array con solo gli anni dei film e lo ritorno

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
  const millenium = movies.filter((n) => {
    return parseInt(n.Year) < 2000;
  });
  return millenium;
};

// creo la variabile onlyInLastMillennium per la funzione
// creo una costante millenium in cui filtro con il metodo filter() tutti i film
// filter in questo caso mi dovrà controllare  e tornare tutti i film che hanni year minore a 2000
// essendo movies.year stringa lo converto in numero per essere sicuro che funzioni
// a questo punto torno la costante millenium

console.log(onlyInLastMillennium());
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function () {
  return movies.reduce((acc, el) => {
    return acc + parseInt(el.Year);
  }, 0);
};
// creo la variabile sumAllTheYears per la funzione
// uso il metodo reduce per sommare gli anni di tutti i film
// reduce funziona con una funzione in cui i parametri rappresentano un accumulatore e il valore
// all'accumulatore aggiungo tutti gli year (el.Year). Utilizzo sempre parseInt

console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (str) => {
  return movies.filter((movie) => movie.Title.includes(str));
};
// creo la variabile searchByTitle per la funzione a cui assegno il parametro (str)
// mi servirà al momento della sua invocazione
// utilizzo di nuovo il metodo filter per vedere se nell'indice fornito è inclusa la stringa
// con includes e me lo ritorna

console.log(searchByTitle("The Avengers"));
console.log(searchByTitle("Tre uomini e una gamba"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (str) => {
  const matching = {
    match: [],
    unmatch: [],
  };
  // creo la variabile searchAndDivide per la funzione a cui assegno il parametro (str)
  // mi servirà al momento della sua invocazione
  // creo l'oggetto con i due array
  movies.forEach((movie) => {
    if (movie.Title.includes(str)) {
      matching.match.push(movie);
    } else {
      matching.unmatch.push(movie);
    }
  });
  // ciclo con forEach movies. e creo la condizione per cui se nella stringa
  // della funzione invocata è presente il titolo allora la pusho nell'array corrispettivo
  // a match, viceversa lo pusho su unmatch
  return matching;
  // faccio ritornare l'oggetto
};
console.log(searchAndDivide("The Avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (n) => {
  // creo la variabile removeIndex per la funzione a cui assegno il parametro (n)
  // mi servirà al momento della sua invocazione
  return movies.filter((_, i) => i !== n);
  // uso la funzione filter per cercare all'interno di movies
  // nei paramteri di filter il primo parametro è l'elemento corrente
  // che in questo caso non ci serve, per cui mettiamo un segnaposto
  // il secondo è l'indice
  // basterà quindi comparare l'indice col parametro fornito dalla funzione stessa e ritornare
  // il contenuto.
};

console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const getContainer = () => {
  // creo la variabile getContainer per la funzione
  const container = document.getElementById("container");
  //utilizzo getElemetById per trovare l'elemento dotato dell'id "container"
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const getAllTDs = () => {
  // creo la variabile getAllTDs per la funzione
  return document.getElementsByTagName("td");
};
// uso getElementsByTagName per selezionare tutti gli elementi di tag "td"

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const tdText = () => {
  // creo la variabile tdText per la funzione
  let td = document.getElementsByTagName("td");
  // uso getElementsByTagName per selezionare tutti gli elementi di tag "td"
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
  // li ciclo e li stampo in console
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const colorLinksRed = () => {
  // creo la variabile colorLinksRed per la funzione
  const links = document.getElementsByTagName("a");
  // uso getElementsByTagName per accedere ai link "a"
  for (let i = 0; i < links.length; i++) {
    links.style.backgroundColor = "red";
  }
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addMyList = () => {
  // creo la variabile per la funzione
  const ul = document.getElementById("myList");
  //targhetto l'ul cong getElementById
  const li = document.createElement("li");
  // creo un elemento li con create element
  li.textContent = "Nuovo elemento";
  // aggiungo il testo all'elemento
  ul.appendChild(li);
  // appendo a ul li
};
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const emptyList = () => {
  // crep la variabile per la funzione
  const ul = document.getElementById("myList");
  // targhetto ul con il suo id
  ul.innerHTML = "";
  // tramite l'uso di innerHTML svuoto il contenuto
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassToTR = () => {
  // creo la variabile per la funzione
  const rows = document.getElementsByTagName("tr");
  // targhetto con getElementsByTagName il tag che mi interessa assegnando la variabile rows
  for (let i = 0; i < rows.length; i++) {
    rows[i].classList.add("test");
    //ciclo tutti i tag e assegno la classe con classList.add
  }
};
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = (a) => {
  // creo la variabile per la funzione e assegno parametro (a)
  // a sarà la mia altezza quando invoco la funzione
  for (let i = 1; i <= a; i++) {
    console.log("*".repeat(i));
  }
  // ciclo a partendo da 1, visto che il mio albero avrà un asterisco in alto
  // dopo console logo gli asterischi e uso il metodo repeat() per consologgare tante volte quante il ciclo
};
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
//il procedimento è lo stesso solo bisognerebbe considerare gli spazi
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
