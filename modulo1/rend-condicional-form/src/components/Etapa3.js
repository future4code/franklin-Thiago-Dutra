import React from "react";

const Etapa3 = (props) =>{
    return(
        <div>
            <h1>ETAPA 3-INFORMAÇÕES GERAIS DE ENSINO</h1>
            <br/>
                <p>1.Porque você não terminou o curso de graduação?</p>
                <input value={props.valorInput} />

                <br/>
                <label for="escolaridade">4.Qual sua escolaridade? </label>
                <br/>
                    <select id="escolaridade">
                        <option>Nenhum</option>
                        <option>Curso Técnico</option>
                        <option>Curso de Inglês</option>
                    </select>
                <br/>

                

        </div>
    )
}

export default Etapa3;