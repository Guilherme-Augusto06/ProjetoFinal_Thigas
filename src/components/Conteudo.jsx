function Conteudo({children}){
    return(
        <div className={styleContainer}>
            {children}
        </div>
    )
}


const styleContainer = "container mt-5 bg-white p-5 rounded shadow"

export default Conteudo;