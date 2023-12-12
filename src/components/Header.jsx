import Navbar from 'react-bootstrap/Navbar'
import Conteiner from 'react-bootstrap/Container' 
import Button from 'react-bootstrap/Button'
import Adicionar from './Adicionar'
import { useState } from 'react'
function Header({btn}) {

    const [show, setShow] = useState(false);
    function sair(){
        localStorage.removeItem("key")
        location.href = "/"
    }
    
    return (
        <header>
            <Navbar variant="dark">
                <Conteiner>
                    <Navbar.Brand>
                        Minha Empresa
                    </Navbar.Brand>
                    {btn ? (
                    <div className='d-flex gap-3'>
                        <Button onClick={() => setShow(true)} variant="outline-light">Adicionar</Button>
                        <Button onClick={sair}variant="outline-light">Sair</Button>
                    </div>): ''}
                    
                </Conteiner>
                <Adicionar show={show} setShow={setShow} />
            </Navbar>
        </header>
    );
}

export default Header;
