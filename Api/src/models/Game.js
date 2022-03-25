const {Schema, model} = require('mongoose')

const gameSchema= new Schema({
    retiro: {
        type: Boolean,
        default: false,
    },
    expulsado: {
        type: Boolean,
        default: false,
    },
    ganaste: {
        type: Boolean,
        default: false,
    },
    ronda:{
        type: Number,
        default: 5
    },
    premios: {
        type: Number
    },
    jugador:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: false,
        versionKey: false
    }
);

module.exports= model("Game", gameSchema, "Games")