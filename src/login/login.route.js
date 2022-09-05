const route = require('express').Router()
const loginController  = require('./login.controller');
const middleware = require('./middleware')

route.get("/users", loginController.login.findAllUsers)
route.post('/entrar', middleware, loginController.login.userLogin)
module.exports = route
