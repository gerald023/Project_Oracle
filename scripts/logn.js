let container1 = document.querySelector('#container1');
let container2 = document.querySelector('#container2');
let login = document.querySelector('#login');
let signup = document.querySelector('#signup');
let password1 = document.querySelector('#password1');
let see = document.querySelector('#see');

see.addEventListener('click',()=>{
    if (password1.type === 'password') {
        password1.type = 'text'
    }
    else{
        password1.type = 'password'
    }
})
// console.log(password1);
// console.log(login);
// console.log(container1);

signup.addEventListener('click',()=>{
    if (container1.style.display != 'none') {
        container1.style.display = 'none'
        container2.style.display = 'flex'
    }
})
login.addEventListener('click',()=>{
    if (container2.style.display != 'none') {
        container2.style.display = 'none'
        container1.style.display = 'flex'
    }
})
container1.style.display = 'none'
container2.style.display = 'flex'
const email = document.querySelector('#email');

let password2 = document.querySelector('#password2');
let confrimPassword = document.querySelector('#confrim');

let passwordss =document.querySelectorAll('.passwordss');
console.log(passwordss);

passwordss.forEach(password,  function() {
    password.addEventListener('input',()=>{
        email.style.color = 'red'
    })
})
