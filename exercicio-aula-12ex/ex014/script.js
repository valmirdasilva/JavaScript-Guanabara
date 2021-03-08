let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
//let hora = data.getHours()
var hora = 20
function carregar() {
    msg.innerHTML = `Agora são ${hora}`
    if (hora >=0 && hora < 12) {        
    img.src = ' bolinha3.png'
    document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18 ) {
        // Boa tarde
        img.src = ' bolinha2.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = ' bolinha1.png'
        document.body.style.background = '#515154'
    }
}