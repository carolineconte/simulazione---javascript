let stringa = 'Ciao!'

let arrCurrent = []
let arr = []

function strToArray(str) {
    if (str.length == 0) return

    let str2 = ''

    for (let i = 0; i < str.length; i++) {

        str2 += str[i]
        arr.push(str2)
        if (i + 1 == str.length) {
            arrCurrent.push(arr)
            arr = []
        }
    }

    strToArray(str.slice(1))
    return arrCurrent
}

//fazer um ciclo acrescentando em uma array 
// no ciclo seguinte 



console.log(strToArray(stringa))