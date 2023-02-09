window.addEventListener('load', function(){
    let button = document.querySelector('#button')
    let form = document.querySelector('#form')
    let name = document.querySelector('#name')
    let price = document.querySelector('#price')
    let description = document.querySelector('#description')
    let color = document.querySelector('#idColors')
    let category = document.querySelector('#category')

    let nameError = document.querySelector('#nameError')
    let priceError = document.querySelector('#priceError')
    let descriptionError = document.querySelector('#descriptionError')
    let colorError = document.querySelector('#colorError')
    let categoryError = document.querySelector('#categoryError')

    let textDanger = document.querySelectorAll('.text-danger')

    button.addEventListener('click', function(event){
        event.preventDefault()
        let errors={}

        if(name.value.length <3){
            nameError.innerText = 'Este campo debe contener al menos 3 caracteres'
            errors.push('Error')
        }
        if(price.value.length <3){
            priceError.innerText = 'Este campo debe contener al menos 3 caracteres'
            errors.push('Error')
        }
        if(description.value.length <10){
            descriptionError.innerText = 'Este campo debe contener al menos 10 caracteres'
            errors.push('Error')
        }
        if(color.value.length <1){
            colorError.innerText = 'Este campo debe tener contenido'
            errors.push('Error')
        }
        if(category.value.length <3){
            categoryError.innerText = 'Este campo debe tener contenido'
            errors.push('Error')
        }

        if(Object.keys(errors)>=1){
            alert("Campos incompletos");
        }else{
            form.submit()
        }
    })
})