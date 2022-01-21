// build your `/api/projects` router here
const router = require('express').Router()

// model will write to the db
const Project = require('./model')

// add middleware here if needed

router.get('/', (req, res, next)=>{

})

router.post('/', (req, res, next)=>{

})

module.exports = router