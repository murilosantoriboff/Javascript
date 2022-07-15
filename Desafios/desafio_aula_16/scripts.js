let num = document.getElementById('txtnum')
let lista = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Numero invalido ou ja esta na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} elementos cadastrados</p>`
        res.innerHTML += `<p>O maior valor cadastrado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor cadastrado é ${menor}</p>`
        res.innerHTML += `<p>A soma ao todo é ${soma}</p>`
        res.innerHTML += `<p>A media dos numeros é ${media}</p>` 
    }
}