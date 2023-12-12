import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';
function Excluir({id}) {

    const [show, setShow] = useState(false);

    function ExcluirDados(){
        axios.delete(`https://apiaulas.thiagodev502.repl.co/funcionarios/${id}`)
        .then(() => {
            setShow(false);
            location.reload();
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div>
        <span style={{cursor: 'pointer'}} variant="danger" onClick={() => setShow(true)}>
                <MdDeleteForever color='red' size={30} />
        </span>
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <h2>Excluir</h2>
            </Modal.Header>
            <Modal.Body>
                <p>Deseja realmente Excluir?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={ExcluirDados}>Sim</Button>
            </Modal.Footer>
            
        </Modal>
        </div>
    )
}

export default Excluir;
