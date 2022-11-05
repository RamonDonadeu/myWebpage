const openButton = document.getElementById("js--openNavbar")
const closeButton = document.getElementById("js--closeNavbar")
const navbar = document.getElementsByClassName("headerContainer")[0]
const background = document.getElementById("disableBack")

function openHeader() {
    
    navbar.classList.replace('nav--closed', 'nav--open')
    background.classList.replace('hideBack','disableBack')
}

function closeHeader() {
    navbar.classList.replace('nav--open', 'nav--closed')
    background.classList.replace('disableBack','hideBack')
    
}

openButton.addEventListener('click', () => {  
    openHeader()
})

background.addEventListener('click', () => {
    closeHeader()
})


var children = navbar.childNodes;
children.forEach(function(item){
    item.addEventListener('click', () => {
        closeHeader()
    })   
});

