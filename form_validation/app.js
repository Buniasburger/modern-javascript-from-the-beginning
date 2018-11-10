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
function validateZip() {

}
function validateEmail() {
    //
}
function validatePhone() {
    //
}
