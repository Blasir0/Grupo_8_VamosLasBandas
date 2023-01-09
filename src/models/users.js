const fs = require('fs')
const path = require('path')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = {
    fileName: '../data/users.json',

    getData: () => {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    generateId: ()=>{
        let allUsers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
        let lastUser = allUsers.pop()
        if(lastUser){
            return lastUser.id + 1
        }
        return 1
    },

    findAll:() => {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findByPk: (id) =>{
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },

    findByField: (field, text) => {
        let allUsers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
        let userFound = allUsers.find(oneUser => oneUser[field]===text);
        return userFound
    },

    create: (userData) => {
        let allUsers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
        let newUser ={
            id: users[users.length-1]['id']+1,
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(allUsers, null, ' '));
        return true
    },

    delete: () => {
        let allUsers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true
    }
}

module.exports = User