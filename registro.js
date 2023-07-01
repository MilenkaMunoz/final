const url = "http://localhost:3000/api/Consultas/";
let resultados = '';
const formArticulo = document.querySelector("form");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const dni = document.getElementById("dni");
const contraseña = document.getElementById("contraseña");


let option = '';


btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    option = 'crear';
});


