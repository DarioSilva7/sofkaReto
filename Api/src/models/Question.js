const {Schema, model} = require('mongoose')

const questionSchema= new Schema({
    interrogante: {
        type: String,
        required: true,
        unique: true
    },
    opc1: {
        type: String,
        required: true,
    },
    opc2: {
        type: String,
        required: true,
    },
    opc3: {
        type: String,
        required: true,
    },
    opc4: {
        type: String,
        required: true,
    },
    rta:{
        type: String,
        required: true
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
},
    {
        timestamps: false,
        versionKey: false
    }
);

module.exports= model("Question", questionSchema, "Questions")