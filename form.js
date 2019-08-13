function logSubmit(event ){
    ahorita = new Date();
    event.preventDefault();
    hola.textContent  = `${event.target.childNodes[1].value} lo subido son las ${ahorita} `; 
}

let hola = document.querySelector('div#hola');
let form = document.querySelector('#f');
form.addEventListener('submit', logSubmit);