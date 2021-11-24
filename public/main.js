var btn = document.querySelector('.btn__imprimir');
btn.onclick = () =>{
    window.print();
}

let form = document.getElementById('container');
let nombre = form.elements[0];
let apellido = form.elements[1];
let celular = form.elements[2];
let pais = form.elements[3];


const modalClose = document.querySelector('.btn__close');
const modal = document.querySelector('.modal');
modalClose.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});



