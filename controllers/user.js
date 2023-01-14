const User = require('../models/User')

const controller = {
    create: async (req, res, next) => {
    let { name, lastName, role, email, discordTag, cohort } = req.body
    try {
      let newUser = await User.create({ name, lastName, role, email, discordTag, cohort })
      res.status(201).json({
        response: newUser,
        success: true,
        message: 'Usuario creado'
      })
    } catch (error) {
      next(error)
    }
  },
  read: async (req, res, next) => {
    let { id } = req.params
    try {
      let userid = await User.find({discordTag: `${id}`})
      if(userid){
      res.status(200).json({
        response: userid,
        success: true,
        message: 'Usuario encontrado'
      })}
      else{
        res.status(400).json({
        success: false,
        message: 'Usuario no encontrado'
      })}
    } catch (err) {
      next(err)
    }
  },
}

module.exports = controller;