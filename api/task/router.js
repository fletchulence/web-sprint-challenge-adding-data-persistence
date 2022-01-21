// build your `/api/tasks` router here
const router = require('express').Router()

// model will write to the db
const Task = require('./model')

// add middleware here if needed


router.get('/', async (req, res, next)=>{
   try{
      res.json( await Task.getAll() )
   } catch(err){
      next(err)
   }
})

router.post('/', async (req, res, next)=>{
   const newTask = await Task.create( req.body )
   try{
      res.json( newTask )
   } catch(err){
      next(err)
   }
})

module.exports = router

