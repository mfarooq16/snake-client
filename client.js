const net = require('net');

const { IP, PORT, NAME } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  
  // prints message when connection is successful
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  })

  // prints initals
  conn.on('connect', () => {
    conn.write(`Name: ${NAME}`);
  });

  /*
  //moves the snake up once
  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up'); 
    }, 1000)
  })
  // move snake up multiple times
  conn.on('connect', () => {
    setInterval(() => {
      conn.write('Move: up');
    }, 500);
  })
  */

  //when client is idle,  message from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = { connect };