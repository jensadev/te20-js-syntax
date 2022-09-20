const input = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');
button.addEventListener('click', () => {
    const name = input.value;
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]); // hur ska det bli baklänges?
    }
    // skriv ut namnet baklänges i en lista
    // const ul = document.createElement('ul');
    // const li = document.createElement('li');
    // li.textContent = BOKSTAVEN;
    // ul.appendChild(li);
    // messageBox.appendChild(ul);
});