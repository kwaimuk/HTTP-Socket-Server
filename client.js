const net =require('net');

net.createConnection({ port: 8080},() =>{
console.log('connected');
});

