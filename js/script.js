let numbers = []; //numeri che l'utente inserisce
let N = 10; //lunghezza dell'array di numeri
let i = 0; //indice

//Fino a quando l'array non è pieno
while (numbers.length < N) {
    let input = parseFloat(prompt("Inserisci un numero dispari: ")); //chiedo all'utente un numero dispari
    console.log("Numero inserito dall'utente: " + input); //stampa in console del numero inserito dall'utente
    //Se il numero inserito è dispari
    if ((input % 2) == 1) {
        numbers[i] = input; //salvo il numero dispari dentro l'array
        console.log("Numero dispari inserito nell'array: " + numbers[i]); //stampa del numero dispari inserito nell'array
        i++; //incremento l'indice
    }
}

//Ciclo di stampa
for (i = 0; i < N; i++) {
    console.log("Numero: " + numbers[i]); //stampo i numeri dentro l'array
}