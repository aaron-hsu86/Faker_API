const express = require('express')
const {faker} = require('@faker-js/faker')
const app = express()
const port = 8000;

// allow app to accept json
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newUser = {
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
        bio: faker.person.bio()
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        name: faker.company.name(),
        catch_phrase: faker.company.catchPhrase(),
        buzz_phrase: faker.company.buzzPhrase()

    }
    return newCompany
}

app.get('/api/users/new', (req, res) =>  {
    res.json(createUser())
})

app.get('/api/companies/new', (req, res) =>  {
    res.json(createCompany())
})

app.get('/api/user/company', (req, res) =>  {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json([newUser, newCompany])
})




app.listen( port, () => console.log(`SERVER ONLINE!!\nListening on port: ${port}`) );