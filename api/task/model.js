// build your `Task` model here
const db = require('./../../data/dbConfig')

module.exports = {
   getAll,
   create
}

async function getAll(){
   return await db('tasks as t')
      .select('t.*', 'p.project_name', 'p.project_description')
      .leftJoin('projects as p', 'p.project_id', '=', 't.project_id')
   // console.log('gettting all this ish')
}

async function create(){
   console.log('gettting all this ish')
}