let burgerButton = document.querySelector('.burger-container')
let navBar = document.querySelector('.main-navbar')
let ulNavBar = document.querySelector('.ulNavBar')
let ulLiNavBar = document.querySelectorAll('.ulNavBar li')

burgerButton.addEventListener('click', function(event){
    event.preventDefault()
    navBar.style.display = 'block'
    navBar.style.position = "absolute"
    navBar.style.marginTop = "130px"
    navBar.style.paddingTop = "10px"
    navBar.style.paddingBottom = "10px"
    navBar.style.backgroundColor = "rgb(60, 60, 60)"
    ulNavBar.style.marginLeft = "10px"
    ulLiNavBar.style.margin = "15px"
})
