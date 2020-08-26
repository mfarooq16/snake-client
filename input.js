const { connect } = require('./client');
const { MOVE_UP, MOVE_DOWN, MOVE_RIGHT, MOVE_LEFT, MESSAGES } = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //handleUserInput function to exit with ^c
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write(`Move: ${MOVE_UP}`);
    }
    if (key === 'a') {
      conn.write(`Move: ${MOVE_LEFT}`);
    }
    if (key === 's') {
      conn.write(`Move: ${MOVE_DOWN}`);
    }
    if (key === 'd') {
      conn.write(`Move: ${MOVE_RIGHT}`);
    }
    if (key === 'g') {
      conn.write(`Say: ${MESSAGES.g}`);
    }
    if (key === 'h') {
      conn.write(`Say: ${MESSAGES.h}`);
    }
    if (key === 'b') {
      conn.write(`Say: ${MESSAGES.b}`);
    }
  };
  //handleUserInput function to exit with ^c
  stdin.on('data',handleUserInput );

  return stdin;
}

module.exports = { setupInput }