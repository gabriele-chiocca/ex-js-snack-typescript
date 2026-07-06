//Snack 1

// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

// Se è una stringa: stampala in maiuscolo

// Se è un numero: moltiplicalo per due e stampalo

// Se è un booleano: stampa “Sì” o “No” in base al suo valore

// In tutti gli altri casi: stampa “Tipo non supportato”

let data: unknown = await prendiValoreDaApi();

if (typeof data === 'string') {
  data = data.toLocaleUpperCase();
  console.log(data);
} else if (typeof data === 'number') {
  data = data * 2;
  console.log(data);
} else if (typeof data === 'boolean') {
  console.log(data ? 'Sì' : 'No');
} else {
  console.log('Tipo non supportato');
}

//Snack 2

// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

import { Dipendente } from './types';

const dipendente: Dipendente = {
  nome: 'Mario',
  cognome: 'Rossi',
  annoNascita: 1998,
  sesso: 'm',
  anniDiServizio: [2015, 2016],
};
