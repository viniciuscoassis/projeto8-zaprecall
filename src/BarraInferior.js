import party from "./img/party 2.png"
import sad from "./img/sad 7.png"

export default function BarraInferior({mensagemConcluido ,tamanhoDeck, iconesRespostas, contador}) {

    return(

      <div className="barraInferior">

<div className="barraInferiorConteudo">
  
<div className= {`tituloFinal `} > 
<img src={mensagemConcluido.emoji}/>
<h1> {mensagemConcluido.titulo} </h1>
</div>

<div className={`mensagemFinal`}> {mensagemConcluido.texto}</div>

<div className="concluidos">{contador}/{tamanhoDeck} CONCLUÍDOS </div>

<div className="icons"> 

{iconesRespostas.map((resposta,index) =>
<div key={index} className={resposta.status}> <ion-icon name={resposta.name} ></ion-icon> </div>)}

</div>
</div>

      </div>


    )
    
    

  }