var menu = document.querySelector("#imagemMenu")
var links = document.querySelectorAll(".linkEspecial")

links.forEach((link, index)=>{
    menu.addEventListener('click', bl =>{
        link.classList.toggle('show')
    })
})
