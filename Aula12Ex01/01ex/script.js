

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = `#f2d29a`
    } else if (hora < 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = `#b9846f`
    }else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = `#515154`
    }
}