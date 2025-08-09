const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
    let a = event.currentTarget.value.trim();
    output.textContent = a === '' ? 'Anonymous' : a;
})