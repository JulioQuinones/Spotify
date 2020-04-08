const mostrar = document.getElementById('menu')
const menu = document.getElementById('mostrar')
const reproducir = document.getElementById('reproducir')
const play = document.getElementById('play')
reproducir.addEventListener('click', () =>{
    play.play() 
}) 
let cont =1
mostrar.addEventListener('click', () =>{
    if(cont == 1){
        menu.style.right = "1em"
        menu.style.transition = "all .3s"
        cont =0;
    }else{
        cont =1;
        menu.style.right = "-11em"
        menu.style.transition = "all .3s"
    }
})