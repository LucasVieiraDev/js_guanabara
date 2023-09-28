function tabuada() {

    let num = document.querySelector(`input#txtn`)
    let n = Number (num.value)
    let tab = document.getElementById(`seltab`)
    tab.innerHTML = `calculando`
    let resul = document.querySelector(`div#teste`)

    for( let t = 1; t < 11; t ++) {
        let r = n * t
        let res = document.createElement(`option`)
        res.setAttribute(`id`, `res`)
        res.text = `${n} x ${t} = ${r}`
        res.value = `tab${t}`
        tab.appendChild(res)
        //resul.innerHTML += `${n} x ${t} = ${r} </br>`
    }
}