// build your `Resource` model here
const db = require('./../../data/dbConfig')

module.exports = {
   getAll,
   create
}

async function getAll(){
   return await db('resources')
   // console.log('gettting all this ish')
}

async function create(){
   console.log('gettting all this ish')
}