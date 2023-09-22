let stringa = 'Ciao'
let limite = 24;
let arr = []

function strToArray(str, limite) {
    if (arr.length == limite) return
    str = str.split('')


    for (var i = n - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + limite));
        var tmp = a[i];
        arr[i] = a[j];
        a[j] = tmp;
    }

    strToArray(str)
    return arr
}
console.log(strToArray(stringa, limite))




