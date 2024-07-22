function carregar(){
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    
    
    if (hora >= 0 && hora < 12 ){
        console.log(" Bom dia")
        imagem.src = './img/dia.jpg'
        msg.innerHTML = `Agora são ${hora} horas, Bom dia!`
        
    }
    else if (hora >= 12 && hora < 18 ){
        console.log(" Boa Tarde")
        imagem.src = './img/tarde.jpg'
         msg.innerHTML = `Agora são ${hora} horas, Boa Tarde!`
         document.body.style.background = 'rgba(168, 121, 41, 0.500)';

    }
    else{
        console.log(" Boa Noite")
        imagem.src = './img/noite.jpg'
         msg.innerHTML = `Agora são ${hora} horas, Boa Noite!`
         document.body.style.background = "rgb(0, 30, 60)"
          document.main.style.background = "rgb(0, 30, 60)"
    }
 
}