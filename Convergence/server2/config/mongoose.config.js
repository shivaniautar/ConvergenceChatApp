const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});