const express = require('express');
const cors = require('cors');




class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths = {}


        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //sockets
        this.sockets();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );


    }

    routes() {
        
        //this.app.use( this.paths.auth, require('../routes/auth'));
    }

    sockets(){

        this.io.on('connection', socket => {
            

            socket.on('disconnect', () => {
                
            })

            socket.on('enviar-mensaje',(payload) => {
                //enviar msg a todos los clientes conectados
                this.io.emit('enviar-mensaje', payload);
            })

        })

    }

    listen() {
        this.server.listen( this.port, () => {
            
        });
    }

}




module.exports = Server;