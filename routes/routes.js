const userController = require('../controllers/controller')

module.exports = app => {
    app.get('/api/users/new', userController.newUser)    
    app.get('/api/companies/new', userController.newCompany)    
    app.get('/api/user/company', userController.userCompany)
}