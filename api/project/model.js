// build your `Project` model here
const db = require('./../../data/dbConfig')

module.exports = {
   getAll,
   create,
   getName,
}

async function getAll(){
   return await db('projects')
}

async function getById(project_id){
   return await db('projects')
      .where({ project_id })
      .first()
}

async function getName(project_name){
   return await db('projects')
      .where({ project_name })
      .first()
}

function create(project){
   return db('projects')
      .insert(project)
      .then(id => {
         return getById(id)
      })
}