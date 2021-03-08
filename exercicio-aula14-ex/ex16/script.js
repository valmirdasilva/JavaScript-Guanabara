
function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    let c;

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        window.alert('[ERRO] Faltam dados! (Não pode ser menor ou igual a zero)')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)


        if (i < f) {
            for (c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449}`
            }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
