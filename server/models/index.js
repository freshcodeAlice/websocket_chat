const mongoose = require('mongoose');
const config = require('../configs').db.development;
const Message = require('./message');
const User = require('./user');

mongoose.connect(`mongodb://${config.hostName}:${config.port}/${config.dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = {
    Message, User
}