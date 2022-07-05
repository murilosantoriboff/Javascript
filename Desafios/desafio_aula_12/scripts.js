var body = window.document.body
var mensagem_div = window.document.getElementById('msg')
var foto_div = window.document.getElementById('imagem')

function carregar () {
    var data = new Date()
    var hora = data.getHours()
    mensagem_div.innerHTML = `<p id="mensagem_p">Agora são ${hora} horas!</p>`
    if (hora < 12 && hora >= 0) {
        // Bom dia
        foto_div.src = 'img/manha_p.png'
        body.style.background = 'rgb(231, 200, 98)'
    }
    else if (hora >= 12 && hora <= 17) {
        // Boa tarde
        foto_div.src = 'img/tarde_p.png'
        body.style.background = 'rgb(204, 93, 2)'
    }
    else {
        // Boa noite
        foto_div.src = 'img/noite_p.png'
        body.style.background = 'rgb(168, 168, 168)'
    }
}