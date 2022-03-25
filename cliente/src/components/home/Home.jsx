import { QuestionForm } from "./QuestionForm"

export const Home = () => {
    return(
        <div>
            <h1>Bienvenido al desafio Sofka!!</h1>
            <h3>Crea el cuestionario de 25 preguntas para comenzar a jugar. </h3>
            <QuestionForm />
        </div>
    )
}