// build your `Task` model here
const db = require('./../../data/dbConfig')

module.exports = {
   getAll,
   create
}

async function getAll(){
   const rows = await db('tasks as t')
      .select('t.*', 'p.project_name', 'p.project_description')
      .leftJoin('projects as p', 'p.project_id', '=', 't.project_id')
   // console.log('gettting all this ish')

   const result = rows.map(el =>({
      ...el,
      task_completed: el.task_completed === 1 ? true : false
   }))
   return result
}

function create(newTask){
   return db('tasks')
      .insert(newTask)
      .then(id =>{
         return db('tasks')
         .where('task_id', id)
         .first()
         .then(t=>({
            ...t,
            task_completed: t.task_completed === 1 ? true : false
         }))
      })
}