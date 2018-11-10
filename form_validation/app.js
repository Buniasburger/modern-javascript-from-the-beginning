// Form Blur Event Listeners
document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zip').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

function validateName(e) {
    const name = e.target.value;
    const re = /^[A-Za-z\s]{2,10}$/;

    if(!re.test(name)) {
        e.target.classList.add('is-invalid');
    } else {
        e.target.classList.remove('is-invalid');
    }
}
function validateZip(e) {
    const zip = e.target.value;
    const re = /^[0-9]{2}-[0-9]{3}$/;

    if(!re.test(zip)) {
        e.target.classList.add('is-invalid');
    } else {
        e.target.classList.remove('is-invalid');
    }
}

function validateEmail(e) {
    const email = e.target.value;
    const re = /^.*@\w+\.\w+/;
    // const re = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email)) {
        e.target.classList.add('is-invalid');
    } else {
        e.target.classList.remove('is-invalid');
    }
}
function validatePhone() {
    //
}
