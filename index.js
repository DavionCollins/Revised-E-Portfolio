let isModalOpen = false;
let contrastToggle = false

// Dark Mode

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += "dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


// Email

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += ' modal__overlay--visible'

    emailjs
    .sendForm(
        'service_k3ja4zv',
        'template_i3hdw4n',
        event.target,
        'E6k-6EI2k2Z5ma9MM'
    ) .then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
    }).catch(() => {
        loading.classList.remove ('modal__overlay--visible')
        alert(
            'The email service is temporarily unavailable. Please contact me directly at davioncollins3461@gmail.com'
        )
    })
}

// Modal Toggle

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
    
}