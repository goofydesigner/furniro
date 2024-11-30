import bcrypt from 'bcrypt'

const users = [
    {
        name: 'test',
        email: 'test@email.com',
        password: bcrypt.hashSync('test', 10) 
    },
    {
        name: 'test1',
        email: 'test1@email.com',
        password: bcrypt.hashSync('test1', 10) 
    },
    {
        name: 'test2',
        email: 'test2@email.com',
        password: bcrypt.hashSync('test2', 10) 
    },
]

export default users