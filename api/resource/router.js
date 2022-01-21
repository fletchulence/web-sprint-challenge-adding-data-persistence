// build your `/api/resources` router here
const router = require('express').Router()

// model will write to the db
const Resource = require('./model')

// add middleware here if needed

router.get('/', async (req, res, next)=>{
   try{
      res.json( await Resource.getAll() )
   } catch(err){
      next(err)
   }
})

router.post('/', (req, res, next)=>{

})

module.exports = router