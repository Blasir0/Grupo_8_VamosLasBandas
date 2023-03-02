window.addEventListener('load', function(){
    let burguerButton = document.querySelector('#burgerButton')
    let navBar = document.querySelector('#navBar')

    burguerButton.addEventListener('click', function(event){
        event.preventDefault()
        navBar.style.display = 'block'
    })
})