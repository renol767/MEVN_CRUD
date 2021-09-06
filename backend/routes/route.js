const express = require('express');
const route = express.Router();

let model = require('../models/model');

// CREATE DATA
route.route('/create-data').post((req, res, next) => {
    model.create(req.body, (error, data) => {
        if (error) {
            return next(error)
          } else {
            res.json(data)
          }
    })
})

// GET ALL DATA
route.route('/').get((req, res, next) => {
    model.find((error, data) => {
        if (error) {
            return next(error)
          } else {
            res.json(data)
          }
    })
})

// GET Data by ID
route.route('/edit-data/:id').get((req, res, next) => {
    model.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
          } else {
            res.json(data)
          }
    })
})

// Update DATA
route.route('/update-data/:id').put((req, res, next) => {
    model.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
          } else {
            res.json(data)
            console.log('Data Berhasil di Update')
          }
    })
})

// Delete Data
route.route('/delete-data/:id').delete((req, res, next) => {
    model.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
          } else {
            res.status(200).json({
                msg: data
            })
          }
    })
})

module.exports = route;