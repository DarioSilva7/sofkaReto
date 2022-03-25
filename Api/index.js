const app = require('./app')
require('dotenv').config()

const port = process.env.PORT

const fs = require('fs')
const info = fs.readFileSync('./categories.json' , { encoding: 'utf-8' });
const data = JSON.parse( info );

const {dbConection} = require('./src/database/config')
const { loadCategories } = require('./loadCategories')
dbConection()

app.listen(port, async ()=>{
    await loadCategories(data)
    console.log(`http://localhost:${port}`)
})