import Button from "react-bootstrap/Button"
import Conteudo from "../components/Conteudo"
import Header from "../components/Header"
import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert"
import { useState } from "react"

function Login(){

    const [alert, setAlert] = useState(false)

    function autenticar(event){
        event.preventDefault()
        const email= event.target[0].value
        const password = event.target[1].value

        if (email === "admin@admin" && password === "123"){
            localStorage.setItem("key", "token")
            location.href = "/painel"
        }
        else{
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }
    return(
        <>
            <Header btn={false}/>
            <Conteudo>
                <h2>Login</h2>
                <Form onSubmit={autenticar}>
                    <Form.Group>
                        <Form.Label className="mt-3" >Email</Form.Label>
                        <Form.Control type="email" placeholder="Insira seu email" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mt-3" >Senha</Form.Label>
                        <Form.Control type="password" placeholder="Insira sua senha" required/>
                    </Form.Group>
                    <Button className="mt-3" type="submit">Login</Button>
                    {alert ? <Alert className="mt-3" variant="danger">Usuário ou senha incorretos</Alert> : ""}
                </Form>
            </Conteudo>
        </>
    )
}

export default Login