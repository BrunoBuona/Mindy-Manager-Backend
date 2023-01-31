const { options } = require("joi");
const User = require("../models/User");

const controller = {
  create: async (req, res, next) => {
    let { name, lastName, role, email, discordTag, cohort } = req.body;
    let strikes = 0;
    reports=[];
    try {
      let newUser = await User.create({
        name,
        lastName,
        role,
        email,
        discordTag,
        cohort,
        strikes,
        reports,
      });
      res.status(201).json({
        response: newUser,
        success: true,
        message: "Usuario creado",
      });
    } catch (error) {
      next(error);
    }
  },
  read: async (req, res, next) => {
    let id = req.params.id;
    try {
      let user = await User.findOne({ discordTag: id });
      if (user) {
        res.status(200).json({
          success: true,
          message: "the user was found successfully!.",
          data: user,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "the user was not found.",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error,
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    
    try {
      let user = await User.findOneAndUpdate({ discordTag: id }, req.body, {
        new: true,
      });
      if (user) {
        res.status(200).json({
          id: user._id,
          success: true,
          message: "user modified",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "user not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        menssage: error.message,
      });
    }
  },
};

module.exports = controller;
