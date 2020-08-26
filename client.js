const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
    
  });
  
  // prints message when connection is successful
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  })

  // prints initals
  conn.on('connect', () => {
    conn.write('Name: MF');
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