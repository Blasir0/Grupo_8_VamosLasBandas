window.addEventListener('load', function(){
    let button = document.querySelector('#button')
    let form = document.querySelector('#form')
    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let category = document.querySelector('#category')

    let firstNameError = document.querySelector('#firstNameError')
    let lastNameError = document.querySelector('#lastNameError')
    let emailError = document.querySelector('#emailError')
    let passwordError = document.querySelector('#passwordError')
    let categoryError = document.querySelector('#categoryError')

    let textDanger = document.querySelectorAll('.text-danger')

    email.addEventListener('focus',()=>{
        email.style.backgroundColor ='pink'
    })
    email.addEventListener('blur',()=>{
        email.style.backgroundColor ='white'
    })
    firstName.addEventListener('focus',()=>{
        firstName.style.backgroundColor ='pink'
    })
    firstName.addEventListener('blur',()=>{
        firstName.style.backgroundColor ='white'
    })
    lastName.addEventListener('focus',()=>{
        lastName.style.backgroundColor ='pink'
    })
    lastName.addEventListener('blur',()=>{
        lastName.style.backgroundColor ='white'
    })
    password.addEventListener('focus',()=>{
        password.style.backgroundColor ='pink'
    })
    password.addEventListener('blur',()=>{
        password.style.backgroundColor ='white'
    })

    button.addEventListener('click', function(event){
        event.preventDefault()
        let errors={}

        if(email.value.length <10){
            emailError.innerText = 'Este campo debe tener contenido'
            errors.push('Error')
        }else{
            emailError.innerText = ''
            errors.pop()
        }
        if(firstName.value.length <3){
            firstNameError.innerText = 'Este campo debe contener al menos 3 caracteres'
            errors.push('Error')
        }else{
            firstNameError.innerText = ''
            errors.pop()
        }
        if(lastName.value.length <3){
            lastNameError.innerText = 'Este campo debe contener al menos 3 caracteres'
            errors.push('Error')
        }else{
            lastNameError.innerText = ''
            errors.pop()
        }
        if(password.value.length <1){
            passwordError.innerText = 'Este campo debe tener contenido'
            errors.push('Error')
        }else{
            passwordError.innerText = ''
            errors.pop()
        }
        if(category.value.length <3){
            categoryError.innerText = 'Este campo debe tener contenido'
            errors.push('Error')
        }else{
            categoryError.innerText = ''
            errors.pop()
        }

        if(Object.keys(errors)>=1){
            alert("Campos incompletos");
        }else{
            form.submit()
        }
    })
})