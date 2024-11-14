const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.value = '');

const fullNameInput = document.getElementById('fullname');

const resumeFullName = document.getElementById('fullNameResume');

fullNameInput.addEventListener("change", (e) => {
    resumeFullName.textContent = e.target.value;
})

const emailInput = document.getElementById('email');

const emailResume = document.getElementById('emailResume');

emailInput.addEventListener("change", (e) => {
    emailResume.textContent = e.target.value;
})

const numberInput = document.getElementById('number');

const numberResume = document.getElementById('numberResume');

numberInput.addEventListener("change", (e) => {
    numberResume.textContent = e.target.value;
})


const addressInput = document.getElementById('address');

const addressResume = document.getElementById('addressResume');

addressInput.addEventListener("change", (e) => {
    addressResume.textContent = e.target.value;
})