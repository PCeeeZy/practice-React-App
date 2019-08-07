// Dependencies
const mongoose = require('mongoose');

// File Imports
const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        res.send(`find all is hit`)
    },
    findById: (req, res) => {
        res.send(`findbyId is hit. Id is ${req.params.id}`)
    },
    addBook: (req, res) => {
        res.send(`addbook is hit. Id is ${req.params.id}`)
    },
    updateBook: (req, res) => {
        res.send(`updateBook is hit. Id is ${req.params.id}`)
    },
    deleteById: (req, res) => {
        res.send(`deleteById is hit. Id is ${req.params.id}`)
    }
}