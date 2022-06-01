function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    mensagem.innerText = `Agora são ${hora} hora(s) e ${minuto} minuto(s).`
    if (hora >=0 && hora < 12){
        imagem.src = './imagens/manha.jpg'
        document.body.style.background = '#DEB22C'
    }else if(hora>12 && hora <18){
        imagem.src = './imagens/tarde.jpg'
        document.body.style.background = '#AB7C67'
    }else{
        imagem.src = './imagens/noite.jpg'
        document.body.style.background = '#1F3542'
    }
}
