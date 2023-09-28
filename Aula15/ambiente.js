let num = [5, 3]
num.push(`teste push`)
console.log(`Nosso vetor é o ${num}`)
console.log(`o Arrey num tem ${num.length} elementos`)
num.sort()
console.log(num)

for(let c = 0; c < num.length; c++) {
    console.log (num[c])
}

for(let c in num) {

    let s = num[c] + num[c++]
    console.log(s)
}
let pos = num.indexOf(10)
console.log(pos)
