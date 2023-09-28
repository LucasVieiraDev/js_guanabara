var ini = document.querySelector(`input#inicio`)
var fim = document.querySelector(`input#fim`)
var passo = document.querySelector(`input#passo`)
var resultado = document.querySelector(`div#resultado`)

function contar() {
    
    
    if (ini.value.length == 0 || fim.value.length == 0 ) {
        resultado.innerHTML = `ERRO, fatam dados, por favor preencha os campos acima!`
    } else {
        resultado.innerHTML = `Contando:`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0 || passo.value.length == 0) {
            window.alert(`Passo invalido, considerando PASSO = 1 !`)
            p = 1
        }
        
        if ( i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p ) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
           
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
            
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
