const url = "http://localhost:3000/api/formulario/";
let resultados = '';
const formArticulo = document.querySelector("form");
const nombre_apellidos = document.getElementById("nombre_apellidos");
const dni = document.getElementById("dni");
const fecha_nacimiento = document.getElementById("fecha_nacimiento");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");


let option = '';


btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    option = 'crear';
});



formArticulo.addEventListener('submit',
    (e) => {
     e.preventDefault();
     if (option == 'crear') {
         if (nombre.value == "" || correo.value == "" || celular.value == "" || mensaje.value == "" ) {
            alert("Asegúrese de que todos los campos estén completos");
            return false;
           
        } else {
            console.log("Todos los campos están completos");
            fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'content-Type':'application/json'
                    },
                    body: JSON.stringify(
                        {
                            NOMBRES: nombre.value,
                            CORREO: correo.value,
                            TELEFONO: celular.value,
                            MENSAJE: mensaje.value
                        }
                    )
                }
            )
            .then(
                response => response.json()
            )
            .then(
                response => location.reload()
            );
        }
    } else if(opcion == 'editar'){
        console.log("Activado el ");
    }
}
);


