// build your `/api/resources` router here
const router = require('express').Router()

// model will write to the db
const Resource = require('./model')

// add middleware here if needed

router.get('/', (req, res, next)=>{
   Resource.getAll()
   res.json({ message: 'working'})
})

router.post('/', (req, res, next)=>{

})

module.exports = router