import React, {useState} from 'react'
import style from "./LandingPage.module.css";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {postLogin, postSubmit } from "../../redux/actions";

export const LandingPage = () => {
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const [ loginOn , setLoginOn ] = useState(false)
    const [ signUpOn , setSignUpOn ] = useState(false)

    const [ input , setInput ] = useState({
        email: "",
        password: ""
    })
    const [ inputSignUp , setInputSignUp ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    const handleSubmitSignUp=(e)=>{
        dispatch( postSubmit(inputSignUp)  )
        setInputSignUp({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        })
        setLoginOn(false)
        navigate('/home')

    }

    const handleSubmit=(e)=>{
        console.log(input)
        dispatch( postLogin(input)  )
        setInput({
            mail: "",
            password: ""
        })
        setLoginOn(false)
        navigate('/home')
    }

    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeSignUp=(e)=>{
        setInputSignUp({
            ...inputSignUp,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div className={style.container}>

      <div className={style.modal}>
    {
        loginOn || signUpOn 
        ? null 
        :
        <section className={style.containerSection}>
          
          <div className={style.containerTitle}>
            <h1>Bienvenido al desafio Sofka</h1>
          </div>

          <div className={style.containerLogin}>
              <span>Sos usuario?</span>
            <button className={style.containerButon} onClick={()=>setLoginOn(true)} >Iniciar sesión</button>
          </div>

          <div className={style.containerLogin}>
              <span>No tenes cuenta? </span>
              <button className={style.containerButon} onClick={()=>setSignUpOn(true)} >Registrate</button>
          </div>

        </section>
    }
        {
            loginOn ?
                <section className={style.form}>

                    <form onSubmit={e=>handleSubmit(e)} method="POST">

                        <input required type="email" value={input.email} name="email" onChange={e=> handleChange(e) } placeholder="Correo" />

                        <input required type="password" value={input.password} name="password" onChange={e=> handleChange(e) } placeholder="Constraseña"  />

                        <button type="submit">Enviar</button>

                    </form>
                </section>
                :
                null
        }

        {
            signUpOn ?
                <section className={style.form} >
                    <form onSubmit={e=>handleSubmitSignUp(e)} method="POST">

                        <input required type="text" value={inputSignUp.firstName} name="firstName" onChange={e=> handleChangeSignUp(e) } placeholder="Nombre"/>
                   
                        <input required type="text" value={inputSignUp.lastName} name="lastName" onChange={e=> handleChangeSignUp(e) } placeholder="Apellido"/>
                   
                        <input required type="email" value={inputSignUp.email} name="email" onChange={e=> handleChangeSignUp(e) } placeholder="Correo"/>
                   
                        <input required type="password" value={inputSignUp.password} name="password" onChange={e=> handleChangeSignUp(e) }  placeholder="Contraseña"/>
                        
                        <input required type="password" value={inputSignUp.passwordConfirmation} name="passwordConfirmation" onChange={e=> handleChangeSignUp(e) }  placeholder="Confirmar contraseña"/>

                        <button type="submit">Enviar</button>

                    </form>
                </section>
                :
                null
        }

      </div>

    </div>
  );
};
