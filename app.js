function reverse(s){
    const text = s.split("").reverse().join("");
    dialog.innerHTML = text
}

const input = document.querySelector('#input'),
    encriptar = document.querySelector('#encriptar'),
    des = document.querySelector('#des'),
    dialog = document.querySelector('#dialog')

encriptar.addEventListener('click', () => {
    reverse(input.value)
})

des.addEventListener('click', () => {
    reverse(input.value)
})