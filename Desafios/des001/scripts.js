var agora = new Date()
var hora = agora.getHours()
var body_html = document.body
var div_es = document.getElementById('div1')
div_es.innerHTML = `<p id="fhor">Agora são ${hora} horas.</p>`
if (hora <= 11) {
    body_html.style.background = 'rgba(214, 214, 0, 0.801)'
}
else if (hora >= 12 && hora <= 18) {
    body_html.style.background = 'rgb(184, 117, 72)'
}
else {
    body_html.style.background = 'rgba(128, 128, 128, 0.747)'
}