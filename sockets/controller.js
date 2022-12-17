



const socketController = (socket) => {
            

    socket.on('disconnect', () => {
        
    })

    socket.on('enviar-mensaje',(payload, callback) => {
        
        //callback, respuesta solo al cliente especifico.
            const id = '123abc';
            callback({id, fecha: new Date().getTime()});
        
        //enviar msg a todos los clientes conectados
        socket.broadcast.emit('enviar-mensaje', payload);
        
        
    })

}

module.exports ={
    socketController
}