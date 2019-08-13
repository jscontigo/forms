let form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e);
    let nivel = document.querySelectorAll("input#nivel");
    console.log(typeof nivel);
    console.log(nivel);
    nivel.forEach((n)=>{
        n.checked ? 
        (document.querySelector('#sunivel').innerHTML = " " +n.value, console.log(`su nivel es ${n.value}`)) 
        : console.log(`su nivel no es ${n.value}`)
    })
});