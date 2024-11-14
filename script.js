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

const schoolInput = document.getElementById('schoolInput');
const degreeInput = document.getElementById('degreeInput');
const startDateEducationInput = document.getElementById('startDateEducationInput');
const endDateEducationInput = document.getElementById('endDateEducationInput');


const schoolResume = document.querySelector('.school');

schoolInput.addEventListener("change", (e) =>{
    schoolResume.textContent = e.target.value
})

const degreeResume = document.querySelector('.field');

degreeInput.addEventListener("change", (e) => {
    degreeResume.textContent = e.target.value;
})

const startDateResume = document.querySelector('span.start');

startDateEducationInput.addEventListener("change", (e) => {
    startDateResume.textContent = e.target.value;
})

const endDateResume = document.querySelector('span.end');

endDateEducationInput.addEventListener("change", (e) => {
    endDateResume.textContent = ' - ' +  e.target.value;
})

const companyInput = document.getElementById('companyInput');
const titleInput = document.getElementById('titleInput');
const startDateExperienceInput = document.getElementById('startDateExperienceInput');
const endDateExperienceInput = document.getElementById('endDateExperienceInput');

const companyResume = document.querySelector('.company');

companyInput.addEventListener("change", (e) => {
    companyResume.textContent = e.target.value;
})

const titleResume = document.querySelector('.title');

titleInput.addEventListener("change", (e) => {
    titleResume.textContent = e.target.value;
})

const startDateExperienceResume = document.getElementById('start-experience');
const endDateExperienceResume = document.getElementById('end-experience');

startDateExperienceInput.addEventListener("change", (e) => {
    startDateExperienceResume.textContent = e.target.value
})

endDateExperienceInput.addEventListener("change", (e) => {
    endDateExperienceResume.textContent = ' - ' + e.target.value
})