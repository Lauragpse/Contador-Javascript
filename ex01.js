function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resposta = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO!] FALTAM CAMPOS A SEREM PREENCHIDOS.`)
        resposta.innerHTML += ` Impossivel contar`
    } else {
        resposta.innerHTML = `Contando... `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            window.alert(`Passo invalido! considerando o numero de pulo = 1`)
            p = 1
        }

        if (i < f) {
            // contagem crescente
            for (let contador = i; contador <= f; contador += p) {
                resposta.innerHTML += `\uD83D\uDC49 ${contador}  `;
            }
            //contagem regressiva
        } else {
            for (let contador = i; contador >= f; contador -= p) {
                resposta.innerHTML += ` \uD83D\uDC49 ${contador}  `;
            }

        }
    }
}

