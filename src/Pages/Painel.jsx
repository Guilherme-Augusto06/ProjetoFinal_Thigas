import Header from "../components/Header"; 
import Tabela from "../components/tabela"
import Conteudo from "../components/Conteudo";
function Painel() {
    return (
        <>
        <Header btn={true} />
        <Conteudo>
            <h2>Lista de Funcionarios</h2>
            <Tabela/>
        </Conteudo>
        </> 
    );
}

export default Painel;