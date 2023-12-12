import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Formulario from './Formulario';

function Editar({id}) {

    const [show, setShow] = useState(false);
    const [funcionario, setFuncionario] = useState([]);

    useEffect(() => {
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then(response => {setFuncionario(response.data);
        }).catch(error => {
            console.log(error);
        });
    })

    return (
        <div>
            <span style={{cursor: 'pointer'}} variant="danger" onClick={() => setShow(true)}>
                <FaEdit size={30} color='blue'/>
            </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario funcionario={funcionario} setShow={setShow}/>   
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Editar;
