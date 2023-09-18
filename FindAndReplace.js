// Scrivere una funzione che riceva in ingresso tre stringhe:
// ● la prima sara’ un testo
// ● la seconda sara’ una parola che andra’ cercata nel testo
// ● la terza sara’ la parola da sostituire al posto della seconda

// La funzione deve quindi produrre lo stesso effetto che si ottiene quando si fa find and replace di una parola in un testo.
// Si assuma che:
// ● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi non ci saranno spazi
// ● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi l’algoritmo
// ● la seconda e la terza parola non necessariamente devono avere lo stesso numero di caratteri
// Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array. La funzione deve ritornare la nuova stringa aggiornata.


//PseudoCodice
/// Definire tutte le variabili
/// Creare una funzione che Filtra il testo per la seconda variabile
/// sostituire le istanze trovate

let text = "Let's study programming"

function founAndReplace(text, word, newWord) {
    let textArray = text.split(' ')

    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] == word){
            textArray[i] = newWord
        }
    }

    return textArray.join(' ')
}




console.log(founAndReplace(text, 'programming', 'JavaScript'))

// function founAndReplace(text, word, newWord) {
//     let currentWord = ''
//     let newText = '';
//     for (let i = 0; i < text.length; i++) {

//         currentWord += (text[i])

//         if (text[i] == ' ' || text[i] == '?') {
//             currentWord = ''
//         }

//         let split = word.length

//         if (currentWord == word) {
//             newText = text.slice(0, split)
//             newText = newText + ' ' + newWord
//         }
//     }

//     return newText
// }
