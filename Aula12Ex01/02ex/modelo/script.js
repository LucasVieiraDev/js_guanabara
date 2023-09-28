function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#txtano")
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("ERRO! Verifique os dados e tente novamente!")
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement(`img`)
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'HOMEM'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', "bebe-homem.png")
            } else if (idade < 19) {
                // Adolescente
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 55) {
                // Adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'velho-homem.png')
            }


        } else if (fsex[1].checked) {
            genero = 'MULHER'
            if (idade >= 0 && idade < 10 ) {
                // Criança
                img.setAttribute(`src`, `bebe-mulher.png`)
            } else if (idade < 19) {
                // Adolescente
                img.setAttribute(`src`, `jovem-mulher.png`)
            } else if (idade < 55) {
                // Adulto
                img.setAttribute(`src`, `adulta-mulher.png`)
            } else {
                // idoso
                img.setAttribute(`src`, `velha-mulher.png`)
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
   
}