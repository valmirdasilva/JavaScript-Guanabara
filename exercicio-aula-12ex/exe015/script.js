

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        console.log(idade)
        if (fsex[0].checked) {
            genero = 'Homem'
           
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src','crianca-menino.jpg')
            } else if (idade <= 21) {
                // Adolescente
                img.setAttribute('src','menino.jpg')
            } else if (idade <= 50) {
                // Adulto
                img.setAttribute('src','adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src','idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src','crianca-menina.jpg')
            } else if (idade <= 21) {
                // Adolescente
                img.setAttribute('src','menina.jpg')
            } else if (idade <= 50) {
                // Adulto
                img.setAttribute('src','adulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.innerHTML = `É ${genero} e tem ${idade}`
        res.appendChild(img)
    }

}