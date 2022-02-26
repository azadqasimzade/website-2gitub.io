const list = document.querySelector('.list');
const nav = document.querySelector('nav');

list.addEventListener('click',()=>{
    nav.classList.toggle('active');
});