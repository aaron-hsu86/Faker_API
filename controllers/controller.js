const {fakeUser, fakeCompany} = require('../models/model')

module.exports = {
    newUser: (req, res) =>  {
        res.json(fakeUser())
    },
    newCompany: (req, res) =>  {
        res.json(fakeCompany())
    },
    userCompany: (req, res) =>  {
        const newUser = fakeUser();
        const newCompany = fakeCompany();
        res.json([newUser, newCompany])
    }
}

