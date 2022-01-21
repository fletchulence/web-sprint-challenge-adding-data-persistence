// build your `/api/resources` router here
const router = require('express').Router()

const Resource = require('./model')

router.get('/', (req, res, next)=>{
   Resource.getAll()
   res.json({ message: 'working'})
})

router.post('/', (req, res, next)=>{

})

module.exports = router