// build your `/api/resources` router here
const router = require('express').Router()

// model will write to the db
const Resource = require('./model')

// add middleware here if needed
const {
   checkBody,
   checkName
} = require('./midd')

router.get('/', async (req, res, next)=>{
   try{
      res.json( await Resource.getAll() )
   } catch(err){
      next(err)
   }
})

router.post('/', checkBody, checkName, async (req, res, next)=>{
   const newResource =  await Resource.create( req.body ) 
   try {
      res.json( newResource )
   } catch(err){
      next(err)
   }
})

module.exports = router