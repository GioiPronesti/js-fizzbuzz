console.log("hello console!")

/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

/*
Operazioni programma 

Come faccio a sapere se un numero è divisibile per 3 o per 5?
usando l'operatore mondulo % 

eseguo ciclo for per ripetere 100 iterazioni ottenendo la stampa  dei numeri da 0 a 99

dovro controllare se numeri stampati sono divisibili per 3 
e successivamente se sono divisibili per 5 

infine controllo se seno divisibili per entrami i numeri (3 e 5 ) 
                   
PER ogni iterazione perciò dovro eseguire un controllo nelle istruzioni del ciclo for.
avrò quindi variabile contatore, una condizione di permanenza nel ciclo , un incremento per aumentare il valore del contatore.

all' interno delle parentesi graffe metterò i controlli da effettuare per la stampa dei numeri e stringhe.

dichiaro quindi una variabile num per ottenere la stampa 
e su num controllo 

    se NUM è divibile per 3 
        stampo la stinga "Fizz" al posto di num
    se NUM è divisibile per 5 
        stampo la stringa "Buzz" al posto di num
    se NUM è divisibile per 3 e 5 
        allora stampo la stringa "FizzBuzz" al posto di num    

PSEUDO CODICE

    per ogni iterazione del ciclo   100 iterazioni  generano la stampa da 1 a 100
    (dichiaro i = 0; i < 100; i++)  {
    
    dichiaro num = i +1 

    console.log(num)

    }  

*/

for(let i=0; i<100; i++) {

   
   let num = i+1 
   
    // dichiaro una variabile resto per controllare se il numero è divisibile per 3
    let restoMultiplo3 = num % 3   // number 0,1,2

    // dichiaro una variabile resto per controllare se il numero è divisibile per 5
    let restoMultiplo5 = num % 5   // number 0,1,2,3,4

    //
    if (restoMultiplo3 === 0 && restoMultiplo5 === 0) {   // boolean
        console.log('fizzbuzz')


    } else if (restoMultiplo5 === 0) {
        
        console.log('buzz')

    } else if (restoMultiplo3 === 0 ) {

        console.log('fizz')
    
    } else {
        
        console.log(num)
    }
    
 
}