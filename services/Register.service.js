require("dotenv-safe").config();
const jwt = require('jsonwebtoken'); 

const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
  const prisma = new PrismaClient()

exports.register = async (req, res) => { 
    const name = req.body.name
    const email = req.body.email 
    const password = req.body.password
    const accessLevel = req.body.accessLevel
    const department = req.body.department
    console.log(name, email, password,accessLevel,department)
        const passwordHash = bcrypt.hashSync(password, 10)

        await prisma.user.create({
            data: {
            name: name,  
            email: email, 
            password: passwordHash,  
            access_level: parseInt(accessLevel), 
            department: department
        } 
        }) 
    
} 
