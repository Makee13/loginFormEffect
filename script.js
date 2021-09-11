const headingInputs = document.querySelectorAll('.form__content__email__heading')

function effect(headingInput) {
    headingInput.innerHTML = headingInput.innerText.
    split('')
    .map((character, index) => `<span style="transition-delay: ${index*50}ms">${character}</span>`)
    .join('')
}

headingInputs.forEach(effect)
