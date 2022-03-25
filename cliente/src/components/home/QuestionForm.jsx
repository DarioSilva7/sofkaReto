import React, {useState, useEffect} from 'react'
// import { useSelector } from 'react-redux';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCategories } from '../../redux/actions';
import style from "./QuestionForm.module.css";

export const QuestionForm = () => {
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const categoriesState = useSelector((state)=> state.categories)
    const [ arrQuestions , setarrQuestions ] = useState([])

    const [ input , setInput ] = useState({
        // id_categoria: 1,
        interrogante: '',
        opc1: '',
        opc2: '',
        opc3: '',
        opc4: '',
        respuesta: ''
    })

    const handleSubmit=(e)=>{
        // dispatch( postQuestion(input)  )
        setarrQuestions(
            [...arrQuestions,input]
        )
        console.log(arrQuestions.length)
        console.log(arrQuestions," arrQ")
    }
    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick=(e)=>{
        navigate('/game')
    }

    useEffect(() => {
    // Cargar las preguntas del questions.json y las categorias que estan en db -> en el state
        dispatch(getCategories());
        console.log(categoriesState, "CATEGORIAS")
      }, [dispatch]);
    
    return (
        <div className={style.container}>
            <div className={style.modal}>
        {
            arrQuestions.length<=25 
        ?
        <div className={style.form}>
            <form onSubmit={e=>handleSubmit(e)} method="POST">

                        <input required type="text" value={input.interrogante} name="interrogante" onChange={e=> handleChange(e) } placeholder="Interrogante"/>
                   
                        <input required type="text" value={input.opc1} name="opc1" onChange={e=> handleChange(e) } placeholder="Opcion 1"/>
                   
                        <input required type="text" value={input.opc2} name="opc2" onChange={e=> handleChange(e) } placeholder="Opcion 2"/>
                   
                        <input required type="text" value={input.opc3} name="opc3" onChange={e=> handleChange(e) }  placeholder="Opcion 3"/>
                        
                        <input required type="text" value={input.opc4} name="opc4" onChange={e=> handleChange(e) }  placeholder="Opcion 4"/>
                        <label>Selecciona la opcion correcta</label>
                        <select required name="respuesta" onChange={e=>handleChange(e)} value={input.respuesta} >
                            <option value={ input.opc1} > 1</option>
                            <option value={ input.opc2} > 2</option>
                            <option value={ input.opc3} > 3</option>
                            <option value={ input.opc4} > 4</option>
                        </select>
                        {input.interrogante && input.opc1 && input.opc2 && input.opc3 && input.opc4 && input.respuesta ? (
                                <button type="submit">Crear Pregunta</button>
                            ) : null}

                        <button type="submit">Enviar</button>

                    </form>
        </div>
        :
        <div>
            <button onClick={e=>handleClick(e)}>A jugar!</button>
        </div>
        }
            </div>
            </div>
)}