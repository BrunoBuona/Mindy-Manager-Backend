require('dotenv')
const mongoose = require('mongoose')
let conection = async() =>{
    try {
        mongoose.connect(
            process.env.DB_LINK,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }                
        )
        console.log('connected to database');
    } catch (error) {
        console.log(error.message);
    }
}

conection()