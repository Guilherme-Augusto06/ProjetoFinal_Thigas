import Table from 'react-bootstrap/Table'
import axios from "axios"
import { useState, useEffect } from 'react'
import Editar from './Editar'
import Excluir from './Excluir'

function Tabela(){

    const [btnValue, setBtnValue] = useState("Atualizar")
    const [dados, setDados] = useState([])

    useEffect(() => {
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios")
        .then((resposta) => {
            setDados(resposta.data)
            console.log(resposta)
        }).catch((error) =>{
            console.log(error)
        })
    }, [btnValue])

    return(
        <>
            <button onClick={() => setBtnValue("Atualizado")}>{btnValue}</button>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, key) => {
                        return(
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.cargo}</td>
                                <td className='d-flex gap-3'>
                                    <Editar id={item.id} />
                                    <Excluir id={item.id} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default Tabela