let stringa = 4
let init = 0


function strToArray(str) {
    if (str == 0 ) return
    let f = '@'
    let p = ''

    for (let i = 0; i < str; i++){
        p += '-'
        console.log( p + f)
        
    }


    strToArray(str - 1)
}

console.log(strToArray(stringa))





//dado = '----@'

// imprimir = 
// -@
// --@
// -@
// ----@
// -@
// --@
// -@