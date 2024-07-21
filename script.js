function carregar(){
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 1){
        console.log(" Boa Madrugada")
    }
 
}