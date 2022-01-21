// build your `Resource` model here
const db = require('./../../data/dbConfig')

module.exports = {
   getAll,
   create,
   getName
}

async function getAll(){
   return await db('resources')
   // console.log('gettting all this ish')
}

async function getById(resource_id){
   return await db('resources')
      .where({ resource_id })
      .first()
}

async function getName(resource_name){
   return await db('resources')
      .where({ resource_name })
      .first()
}

function create(resource){
   return db('resources')
      .insert(resource)
      .then(id => {
         return getById(id)
      })
}