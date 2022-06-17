import React from "react";//importando react

const Etapa1 = (props) =>{
    return(
        <div>
            <h1>ETAPA 1-DADOS GERAIS</h1>
                <p>O preenchimento de todos os campos desta etapa são obrigatórios!</p>
                <br/>
                <p>1.Informe seu nome? </p>
                    <input value={props.valorInput} />
                    

                <p>2.Informe sua idade?</p>
                    <input value={props.valorInput} />
                
                <p>3.Informe seu email?</p>
                    <input value={props.valorInput} />
                <br/>
                <label for="escolaridade">4.Qual sua escolaridade? </label>
                <br/>
                    <select id="escolaridade">
                        <option>Ensino médio incompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Ensino superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                               
        </div>
    )
}

export default Etapa1;