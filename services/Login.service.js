require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
  const prisma = new PrismaClient()

exports.login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = await prisma.user.findFirst({
        where: {
          email: email,
        }
      })

      const verifyPassword = bcrypt.compareSync(password, user.password)
        if (!user || !verifyPassword) {
            return res.status(401).json({ 
                message: 'Invalid credentials'
            })
        }else{
            const token = jwt.sign({
                userId: user.id,
                accessLevel: user.access_level,
                department: user.department
            }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            })
            return res.status(200).json({
                message: 'Login successful',
                token: token
            })
        }
}
