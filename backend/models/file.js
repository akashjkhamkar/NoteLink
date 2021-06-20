const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    fileName : {
        type : String,
        required : true,
    },
    url : {
        type : String,
        required : true
    },
    user : {
        type : String,
        required : true
    }
})

fileSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('File', fileSchema)