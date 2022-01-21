const Project = require('./model');

const checkBody = (req, res, next) =>{
   const { project_name } = req.body
   if ( !project_name || project_name === undefined ){
      next({ status: 400, message: 'add a project name' })
   } else {
      req.name = project_name
      next()
   }
}

const checkName = async (req, res, next) =>{
   const prevProj = await Project.getName(req.name)
   if ( prevProj ){
      next({ status: 400, message: 'this RESOURCE name must be unique' })
   } else {
      next()
   }
}

module.exports = {
   checkBody,
   checkName
}