const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema= new Schema({
    firstName: {
        type: String,
        required: true,
      },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Email requerido'],
        unique: true,
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido']
    },
    password: {
        type: String,
        minlength:[6,'La contraseña debe tener 6 caracteres como mínimo'],
    },
    acc: {
        type: Number,
        default: 0
    },
    nivel:{
        type: Number,
        default: 0
    },
    juegos:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Game'
        }
    ]
},
    {
        timestamps: false,
        versionKey: false
    }
);

userSchema.statics.encryptPassword= async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword= async(password, receivedPassword)=>{
    return await bcrypt.compare(password, receivedPassword)
}

module.exports= model("User", userSchema, "Users")