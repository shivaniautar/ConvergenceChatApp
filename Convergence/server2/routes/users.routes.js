const usersCtl = require('../controllers/users.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.post ('/api/users', usersCtl.register);
    app.post ('/api/users/login', usersCtl.login);
    // app.get ('/api/users', usersCtl.getOne);
    app.delete('/api/users/logout', usersCtl.logout)

}