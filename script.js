const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        if(button.id === 'blue') {
            body.style.backgroundColor = button.id;
        }
        if(button.id === 'green') {
            body.style.backgroundColor = button.id;
        }
        if(button.id === 'red') {
            body.style.backgroundColor = button.id;
        }
        if(button.id === 'yellow') {
            body.style.backgroundColor = button.id;
        }
    });
}); 

