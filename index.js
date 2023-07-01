// Importar librerias


var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");


// Configuraciones


app.use(express.json());
app.use(cors());



var conexion = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "formulario"
    }
);


conexion.connect(
    function (error) {
        if (error) {
            throw error;
        } else {
            console.log("Conexion Exitosa");
        }
    }
);


const port = process.env.PUERTO || 3000;

app.listen(
    port, function () {
        console.log("Servidor funcionando en puerto: " + port)
    }
);


// loaclhost: 3000
app.post(
    "/api/formulario", (req, res) => {
        let data = {
            NOMBRE_APELLIDO: req.body.NOMBRES_APELLIDO,
            DNI: req.body.DNI,
            DNI: req.body.DNI,
            FECHA_NACIMINETO: req.body.FECHA_NACIMIENTO,
            CONTRASEÑA: req.body.CONTRASEÑA,
           
        }
        let sql = "INSERT INTO formulario SET ?";
        conexion.query(
            sql, data, function (error, resultados) {
                if (error) {
                    throw error;
                } else {
                    console.log(data),
                    res.send(data)
                }
            }
        );
    }
);


//localhost:300 /api/Consultas
