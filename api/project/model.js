// build your `Project` model here
const db = require('./../../data/dbConfig')

module.exports = {
   getAll,
   create,
}

async function getAll(){
   return await db('projects')
}

async function getById(project_id){
   return await db('projects')
      .where({ project_id })
      .first()
}

async function create(project){
   return await db('projects')
      .insert(project)
      .then(([id]) => {
         return getById(id)
      })
}