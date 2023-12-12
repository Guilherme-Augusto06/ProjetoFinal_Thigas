    import Header from "../components/Header"
    import Conteudo from "../components/Conteudo"
    import Form from "react-bootstrap/Form"
    import Alert from "react-bootstrap/Alert"
    import Button from "react-bootstrap/Button"
    import { useState } from "react"

    function Login() {
        const [msg, setMsg] = useState();

        function autenticar(event) {
            event.preventDefault();
            const user = event.target[0].value;
            const pass = event.target[1].value;

            if (user === "admin@admin" && pass === "123") {
                localStorage.setItem("key", "token")
                location.href = "/painel";  

            } 
            else {
                setMsg(true)
                setTimeout(() => {
                    setMsg(false)
                }, 3000);
            }
        }

        return (
            <>
            <Header btn={false} />
            <Conteudo>
                <h2>Login</h2>
                <Form onSubmit={autenticar}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" required/>
                    </Form.Group>
                    <Button type="sumbit"className="btn btn-primary" variant="dark">Login</Button>
                        {msg && <Alert className='mt-3' variant='danger'>
                        Usuario e senha incorretos
                    </Alert>}
                </Form>
            </Conteudo>
            </> 
        );
    }

    export default Login;