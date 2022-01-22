// build your `/api/projects` router here
const router = require('express').Router()

// model will write to the db
const Project = require('./model')

// add middleware here if needed
const {
   checkName,
   checkBody
} = require('./midd')

router.get('/', async (req, res, next)=>{
   try{
      res.json( await Project.getAll() )
   } catch(err){
      next(err)
   }
})


router.post('/', checkBody, checkName, async (req, res, next)=>{
   try {
      const newProject =  await Project.create( req.body ) 
      res.json({ 
         ...newProject,
         project_completed: newProject.project_completed === ( 1 || 'true' ) ? true : false
      })
   } catch(err){
      next(err)
   }
})

module.exports = router