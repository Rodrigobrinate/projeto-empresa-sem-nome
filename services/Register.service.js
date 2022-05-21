const User = require('../prisma/screma.prisma')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.register = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const passwordConfirmation = req.body.passwordConfirmation
    const accessLevel = req.body.accessLevel
    const department = req.body.department
    if(password !== passwordConfirmation) {
        return res.status(400).send({ error: 'Senhas não conferem' })
    }else{ 
        const passwordHash = bcrypt.hashSync(password, 10)

        await prisma.User.create({
            name: name, 
            email: email, 
            password: passwordHash, 
            accessLevel: accessLevel, 
            department: department
        })
    }
}
