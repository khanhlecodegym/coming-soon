let form = document.getElementById('form');
let email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(123);
    let emailValue = email.value;

    if(!validateEmail(emailValue)) {
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        form.classList.remove('error');
        form.classList.add('success');
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}