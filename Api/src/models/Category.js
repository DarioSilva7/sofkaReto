const {Schema, model} = require('mongoose')

const categorySchema= new Schema({
    nombre:{
        type: String,
        required: true
    },
    nivel: {
        type: Number,
        required: true,
    },
    premio: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    preguntas:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    ]
},
    {
        timestamps: false,
        versionKey: false
    }
);

module.exports= model("Category", categorySchema, "Categories")