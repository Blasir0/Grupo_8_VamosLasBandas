const fs = require('fs')

const User = {
    fileName: './data/users.json',

    getData: () => {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findAll:() => {
        return this.getData()
    },

    findByPk: (id) =>{
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },

    findByField: (field, text) => {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field]===text);
        return userFound
    },

    create: (userData) => {
        let allUsers = this.findAll();
        allUsers.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return true
    }
}

module.export = User