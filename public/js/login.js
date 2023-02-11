window.addEventListener('load', function(){
    let button = document.querySelector('#button')
    let form = document.querySelector('#form')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')


    let emailError = document.querySelector('#emailError')
    let passwordError = document.querySelector('#passwordError')

    let textDanger = document.querySelectorAll('.text-danger')

    email.addEventListener('focus',()=>{
        email.style.backgroundColor ='pink'
    })
    email.addEventListener('blur',()=>{
        email.style.backgroundColor ='white'
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

        if(email.value.length <3){
            emailError.innerText = 'Este campo debe tener contenido'
            errors.push('Error')
        }
        if(password.value.length <1){
            passwordError.innerText = 'Este campo debe tener contenido'
            errors.push('Error')
        }

        if(Object.keys(errors)>=1){
            alert("Campos incompletos");
        }else{
            form.submit()
        }
    })
})