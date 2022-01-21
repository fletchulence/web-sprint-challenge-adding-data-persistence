// build your `/api/projects` router here
const router = require('express').Router()

// model will write to the db
const Project = require('./model')

// add middleware here if needed
const {
   handleBooleanProject
} = require('./../globalMidds')

router.get('/', handleBooleanProject, (req, res, next)=>{
   // const {responseBody} = await Project.getAll()
   try{
      res.json( req.response )
   } catch(err){
      next(err)
   }
})


router.post('/', (req, res, next)=>{

})

module.exports = router