var n = []
var resul = document.querySelector(`select#result`)
var r = document.querySelector(`div#res`)

function adicionar() {
    
    var numero = document.querySelector(`input#num`)
    var num = Number(numero.value)
    let tem = n.indexOf(num)

    if (num != 0 && num >= 1 && num <= 100 && tem == -1) {
        
        n.push(num)
        let add = document.createElement(`option`)
        add.setAttribute(`id`, `add${num}`)
        add.text = `Valor ${num} adicionado com sucesso! `
        resul.appendChild(add)
        r.innerHTML = ""

    } else {
        window.alert("ERRO, valor invalido ou jé encontrado na lista!")
    }
    numero.value = ''
    numero.focus()
}

function calcular(valores) {
   
    if (n.length != 0){

        // contar
        let c = valores.length
        r.innerHTML = `<p>Ao todo, temos ${c} números cadastrados.</p>`
        
        // maior valor
        let maior = valores[0]
        for(let m in valores) {
            if(valores[m] > maior) {
                maior = valores[m]
            }
        }
        r.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        
        // menor valor
        let menor = valores[0]
        for (let m in valores) {
            if(valores[m] < menor) {
                menor = valores[m]
            }
        }
        r.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        
        // soma dos valores
        let s = 0
        for ( let i in valores ) {
            s = s + valores[i]
        }
        r.innerHTML += `<p>Somando os valores temos ${s}.</p>`
        
        // média
        let med = s / c
        r.innerHTML += `<p> A média dos valores informados é ${med}.</p>`

    } else {
        window.alert(`ERRO! Adicione valores antes de finalizar! `)
    }
}
function limpar() {
    r.innerHTML = ''
    resul.innerHTML = ''
    n = []
}