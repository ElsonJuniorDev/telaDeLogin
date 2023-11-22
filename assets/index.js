const container = document.getElementById('container');
const registerBtm = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtm.addEventListener('click', ()=>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
});
