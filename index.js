let isModalOpen = false;
let contrastToggle = false
const scaleFactor = 1 / 20

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

// moveBackground

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i){
    const isOdd = i % 2 !== 0;
    const booleanInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px)`
    }
}