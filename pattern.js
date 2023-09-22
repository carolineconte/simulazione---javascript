let alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet = alphabet.toUpperCase().split('');



function founMatch(arr, pattern) {

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (current.length == pattern.length) {
            for (let j = 0; j < current.length; j++) {
                if (current[j] == pattern[j] || patternBlind(pattern)) {
                    console.log(current[j], pattern[j])
                }
            }
        }
    }
}

console.log(founMatch(['PAZZO', 'PEZZO', 'CANEe'], 'P#ZZO'))

function patternBlind(pattern) {

    for (let k = 0; k < pattern.length; k++) {

        if (pattern[k] == '#') {
            return true
        }
    }
    return false
}



// PERCORRER A ARRAY E ENCONTRAR POSSIVEIS MATCHS COMPARANDO TAMANHO
// SE FOR IGUAL E UM POSSIVEL MATCH
// COMPARAR TODAS AS LETRAS 
