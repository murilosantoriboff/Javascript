function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = window.document.getElementById('ano')
    var res = window.document.getElementById('res')
    if (f_ano.value.length == 0 || f_ano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var f_sex = window.document.getElementsByName('radsex')
        var idade = ano - Number(f_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (f_sex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=9) {
                // Criança
                img.setAttribute('src', 'img/h_bebe_p.png')
            } else if (idade > 10 && idade <= 18) {
                // Jovem
                img.setAttribute('src', 'img/h_jovem_p.png')
            } else if ( idade > 19 && idade <= 59) {
                // Adulto
                img.setAttribute('src', 'img/h_adulto_p.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/h_idoso_p.png')
            }
        } else if (f_sex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=9) {
                // Criança
                img.setAttribute('src', 'img/m_bebe_p.png')
            } else if (idade > 10 && idade <= 18) {
                // Jovem
                img.setAttribute('src', 'img/m_jovem_p.png')
            } else if ( idade > 19 && idade <= 59) {
                // Adulto
                img.setAttribute('src', 'img/m_adulta_p.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/m_idosa_p.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}