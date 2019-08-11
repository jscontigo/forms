let f = document.querySelector('#f');
f.onsubmit = handleChange;

function handleChange(e){
    //prevent submitting
    e.preventDefault();
    console.log(`mah name is ${e.target.childNodes[1].value}`);
    let hola = document.querySelector('#hola');
    hola.innerHTML = '';
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('hola ' + e.target.childNodes[1].value))
    hola.appendChild(h1);
}
