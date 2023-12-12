import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"
import { TfiPencilAlt } from "react-icons/tfi";
import axios from "axios";
import Formulario from "./Formulario";

function Editar(id){
    const [show, setShow] = useState(false)
    const [funcionario, setFuncionario] = useState(false)

    useEffect(() => {
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then((resposta) => {
            setFuncionario(resposta.data)
        }).catch((erro) => {
            console.log(erro)
        })
    }, [])

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}>
                <TfiPencilAlt size={20} className="text-success"/>
            </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario funcionario={funcionario} setShow={setShow} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editar