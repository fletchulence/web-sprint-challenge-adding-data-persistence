const Resource = require('./model');

const checkBody = (req, res, next) =>{
   const { resource_name } = req.body
   if ( !resource_name ){
      next({ status: 415, message: 'add a resource name' })
   } else {
      req.name = resource_name
      next()
   }
}

const checkName = async (req, res, next) =>{
   const prevResc = await Resource.getName(req.name)
   if ( prevResc ){
      next({ status: 400, message: 'this RESOURCE name must be unique' })
   } else {
      next()
   }
}

module.exports = {
   checkBody,
   checkName
}