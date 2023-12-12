import Table from 'react-bootstrap/Table';
import Editar from './Editar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Excluir from './Excluir';

function tabela(){

    const [dados, setDados] = useState([]);

    useEffect(() => {
            axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios").then((response) => {
        setDados(response.data);
    }).catch((error) => {
        console.log(error)
    })
    }, []);


    return (
        <>
        <Table>
            <thead>
                <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Cargo</td>
                <td>Ação</td>
                </tr>
            </thead>
            
            <tbody>
                {dados.map((item, key) => (
                    <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.cargo}</td>
                        <td className='d-flex gap-3'>
                            <Editar id={item.id}/>
                            <Excluir id ={item.id}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default tabela;