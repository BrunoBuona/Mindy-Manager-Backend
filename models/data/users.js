const users = [
    {
    name: 'Eric',
    lastName: 'Rodriguez',
    role: 'admin',
    photo: 'https://image.shutterstock.com/image-vector/picture-icon-260nw-323592404.jpg',
    age: 24,
    email: 'feric.rodriguez@gmail.com',
    password: '7D^o$08',
    code: 'EricIsGreatAgain',
    verified: true,
    logged: true,
},
{
    name: 'Alejandro',
    lastName: 'VillaFañe',
    role: 'admin',
    photo: 'https://image.shutterstock.com/image-vector/picture-icon-260nw-323592404.jpg',
    age: 32,
    email: 'alejandrovf@gmail.com',
    password: '0^4qV&6',
    code: 'IgnaRemembersAll',
    verified: true,
    logged: true,
},
{
    name: 'Ignacio',
    lastName: 'Borraz',
    role: 'admin',
    photo: 'https://image.shutterstock.com/image-vector/picture-icon-260nw-323592404.jpg',
    age: 30,
    email: 'ignacioborraz@hotmail.com',
    password: 'aA*0652',
    code: 'ReactLover',
    verified: true,
    logged: true,
},
{
    name: 'Nicolas',
    lastName: 'Cirulli',
    role: 'admin',
    photo: 'https://image.shutterstock.com/image-vector/picture-icon-260nw-323592404.jpg',
    age: 30,
    email: 'nicocirulli@gmail.com',
    password: '!m64Z9m',
    code: 'PsstDontBelieveIgna',
    verified: true,
    logged: true,
},
]
require("dotenv").config()
require("../../config/database")
const User = require("../User")

users.forEach(e=>{
    User.create({
        name:  e.name,
        lastName:  e.lastName,
        role: e.role,
        photo: e.photo,
        age:  e.age,
        email:  e.email,
        password:  e.password,
        code: e.code,
        verified:  e.verified,
        logged: e.logged,
    })
    
})