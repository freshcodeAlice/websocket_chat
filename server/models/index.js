const mongoose = require('mongoose');
const config = require('../configs').db['development'];
const Messages = require('./messages');
const User = require('./user');

mongoose.connect(`mongodb://${config.hostName}${config.port}/${config.dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Messages, User
}