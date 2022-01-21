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

router.post('/', async (req, res, next)=>{
   const { resource_name, resource_description } = req.body
   const prevResc = await Resource.getName(resource_name)
   try {
      if ( !resource_name ){
         next({ status: 415, message: 'add a resource name' })
      } else if ( prevResc ) {
         next({ status: 400, message: 'this RESOURCE name must be unique' })
      } else {
         const newResource =  await Resource.create( req.body ) 
         res.json( newResource )
      }
   } catch(err){
      next(err)
   }
})

module.exports = router