//ref
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', ()=> {
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

//escuchar/recibir el mensaje enviado desde el servidor
socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
});


btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje, 
        id: '1231qasd',
        fecha: new Date().getTime()
    }
    //el tercer argumento es el callback = "(id)"
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('desde el server', id)
    } );
});