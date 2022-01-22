// build your `/api/tasks` router here
const router = require('express').Router()

// model will write to the db
const Task = require('./model')

router.get('/', async (req, res, next) => {
   try {
      res.json(await Task.getAll())
   } catch (err) {
      next(err)
   }
})

router.post('/', (req, res, next) => {
   Task.create(req.body)
      .then(newTask => {
         res.status(200).json(newTask);
      })
      .catch(next);
})

module.exports = router

