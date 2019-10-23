const db = require('mongoose');
db.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if(isConnected) {
    console.log("=> using existing db connection");
    return Promise.resolve();
  }
  console.log("=> using new db connection");
  return db.connect(process.env.DB)
    .then(db => {
      isConnected = db.connections[0].readyState;
    });
};