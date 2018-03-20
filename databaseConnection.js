function databaseConnection(serverName, timeout, datasetName) {
    this.serverName =serverName;
    this.timeout = timeout;
    this.datasetName = datasetName;
  };
  
  databaseConnection.prototype.isConnected = function isConnected() {
    return this.serverName;
  };
  
  module.exports = databaseConnection;