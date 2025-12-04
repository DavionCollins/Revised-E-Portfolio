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