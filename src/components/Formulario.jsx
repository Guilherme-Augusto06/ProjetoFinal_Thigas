    import axios from "axios"
    import Form from "react-bootstrap/Form"

    function Formulario({funcionario, setShow}) {


        function enviarDados(evento){
            evento.preventDefault()
            const nome = evento.target[0].value
            const cargo = evento.target[1].value
            const departamento = evento.target[2].value
            const salario = evento.target[3].value
            if (funcionario){
                axios.put("https://apiaulas.thiagodev502.repl.co/funcionarios/" + funcionario.id
                ,{
                    nome: nome,
                    cargo: cargo,
                    departamento: departamento,
                    salario: salario
                }).then(() => {
                    setShow(false)
                    location.reload()
                    },
                )}else{
                axios.post("https://apiaulas.thiagodev502.repl.co/funcionarios/", {
                    nome: nome,
                    cargo: cargo,
                    departamento: departamento,
                    salario: salario
                }).then(() => {
                    setShow(false);
                    location.reload();
                })}}
                return(
            <Form onSubmit={enviarDados}>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" defaultValue={funcionario?.nome} required></Form.Control>
                </Form.Group>
                            <Form.Group>
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control type="text" defaultValue={funcionario?.cargo} required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control type="text" defaultValue={funcionario?.departamento} required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Salario</Form.Label>
                    <Form.Control type="text" defaultValue={funcionario?.salario} required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control className="btn btn-primary mt-3" type="submit" required></Form.Control>
                </Form.Group>    
                
            </Form>
        )
        }
    export default Formulario;