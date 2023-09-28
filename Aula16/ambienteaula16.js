function parimp (n) {
    if (n%2 == 0) {
        return `par`
    } else {
        return `impar`
    }
}
let res = parimp(2)
console.log(res)

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

let somares = soma(2, 5)
console.log(somares)

function fatorial (n) {
    let fat = 1
    for(let f = n; f > 1; f--)
    fat *= f
    return fat
} 

let fatres = fatorial(5)
console.log(fatres)

// recusividade (uma função chamando ela mesma)
function fatrec(n) {
    if (n == 1) {
         return 1
    } else {
        return n * fatrec(n - 1) // aqui a função chama ela mesma
    }
}
console.log(fatrec(5))
