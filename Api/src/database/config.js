const mongoose = require('mongoose')
require('dotenv').config()

const dbConection =()=>{
    mongoose.connect( process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        })
        .then(db=>{ console.log(`Database is connected to ${db.connection.host}`)})
        .catch(error=> { console.log(error)})
        
}
module.exports= { dbConection }