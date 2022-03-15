const mongoose = require('mongoose');

const dbConnection = async() => {
    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            //No soportadas
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        console.log('Base de datos conectada');

    }
    catch (error) {
        console.log(error);
        throw new Error('Error:');
    }
}



module.exports = {
    dbConnection
}