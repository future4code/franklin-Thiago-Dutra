import React from "react";

const Etapa2 = (props) =>{
    return(
        <div>
            <h1>ETAPA 2-INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <p>Se respondeu superior completo ou incompleto. Do contrário pule para a proxima etapa.</p>
            <br/>
                <p>1.Informe seu curso</p>
                <input value={props.valorInput} />
                
                <p>2.Qual unidade de ensino?</p>
                <input value={props.valorInput} />

                <br/>
                

        </div>
    )
}

export default Etapa2;