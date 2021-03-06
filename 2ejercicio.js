// 2º Ejercicio: Cargar página web HTML estática alojada en el servidor, instrucciones
var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(peticion, respuesta) 
{
    var cadena = url.parse(peticion.url, true);
    var nombreFichero = cadena.pathname;
    respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8 '});
    if (nombreFichero=='/dni'){
        fs.readFile("./instrucciones.html", function(error, contenido) 
        {
            if (error) 
            {
                respuesta.writeHead(404);
                return respuesta.end("404 Not Found");
            }
            respuesta.write(contenido);
            return respuesta.end("\n</div> \n</body> \n</html>");
        });
    }else{
        respuesta.write("<p>No has escrito bien la dirección, intente de nuevo😉</p>");
        respuesta.end();
    }
}).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');