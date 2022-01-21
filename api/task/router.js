// build your `/api/tasks` router here
const router = require('express').Router()

// model will write to the db
const Task = require('./model')

// add middleware here if needed
const {
   handleBooleanTask
} = require('./../globalMidds')

router.get('/', handleBooleanTask, (req, res, next)=>{
   try{
      res.json( req.response )
   } catch(err){
      next(err)
   }
})

router.post('/', (req, res, next)=>{

})

module.exports = router