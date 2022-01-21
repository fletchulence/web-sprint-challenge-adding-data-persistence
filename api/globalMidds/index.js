const Project = require('./../project/model')
const Task = require('./../task/model')

const handleBooleanProject = async (req, res, next) =>{
   const oldVal = await Project.getAll()
   try {
      req.response = [];
      oldVal.map(el => {
         if ( el.project_completed === 1 ){
            req.response.push({
               ...el,
               project_completed: true
            })
         } else {
            req.response.push({
               ...el,
               project_completed: false
            })
         }
      });
      next()
      // req.response = oldVal
   } catch (err) {
      next(err)
   }
}
const handleBooleanTask = async (req, res, next) =>{
   const oldVal = await Task.getAll()
   try {
      req.response = [];
      oldVal.map(el => {
         if ( el.task_completed === 1 ){
            req.response.push({
               ...el,
               task_completed: true
            })
         } else {
            req.response.push({
               ...el,
               task_completed: false
            })
         }
      });
      next()
      // req.response = oldVal
   } catch (err) {
      next(err)
   }
}


module.exports = {
   handleBooleanProject,
   handleBooleanTask,
}

// i want to take something from the db and change it directly before it hits anything else
// then call it a 