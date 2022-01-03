let containerMenu = document.getElementById('menu')
let showInformations = containerMenu.children[0]

function showMenu(){
    containerMenu.style.opacity = '100%'
    showInformations.style.display = 'block'
}

function closeMenu(){
    containerMenu.style.opacity = '0%'
    showInformations.style.display = 'none'
}