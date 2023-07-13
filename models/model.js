const {faker} = require('@faker-js/faker')

module.exports = {
    fakeUser: createUser = () => {
        const newUser = {
            name: faker.person.fullName(),
            job: faker.person.jobTitle(),
            bio: faker.person.bio()
        }
        return newUser;
    },
    fakeCompany: createCompany = () => {
        const newCompany = {
            name: faker.company.name(),
            catch_phrase: faker.company.catchPhrase(),
            buzz_phrase: faker.company.buzzPhrase()    
        }
        return newCompany
    }
}