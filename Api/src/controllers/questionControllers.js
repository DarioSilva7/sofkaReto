const Question = require('../models/Question')
const Category = require('../models/Category')

module.exports.createQuestion= async (req, res) => {
    req.body.interrogante = req.body.interrogante.toUpperCase()
    const {interrogante} = req.body
    try {
        const questionDB = await Question.findOne({interrogante})
        if(questionDB){
            return res.status(400).json({msg: `La pregunta ${questionDB.interrogante} ya existe`, data: questionDB})
        }

        const questionCreated = await Question.insertMany(req.body)

        const {categoria, _id} = questionCreated[0]

        let theCategory= Category.findById(categoria).then(categoria=>{
            categoria.preguntas.push(_id)
            return categoria.save()
        })
        return res.status(201).json({msg:"Question craeted successfully", data: questionCreated[0]})
        
    } catch (error) {
        return res.json(error);
    }
}

module.exports.allQuestions= async(req,res)=>{
    try{
        const allQ= await Question.find().populate('categoria','nombre nivel premio')
        if(!allQ){
            return res.status(404).json({msg:"Not questions found"})
        }
        return res.status(200).json({msg:"Games found successfully", data: allQ})
    }catch(e){
        return 
    }
}