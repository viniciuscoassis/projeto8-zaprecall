export default function BarraInferior({ tamanhoDeck, iconesRespostas, contador}) {

    return(

      <div className="barraInferior">

<div className="barraInferiorConteudo">
  
<div className= {`tituloFinal `} >
<img src="" />
<h1> </h1>
</div>

<div className={`mensagemFinal`}> </div>

<div className="concluidos">{contador}/{tamanhoDeck} CONCLUÍDOS </div>

<div className="icons"> 

{iconesRespostas.map((resposta,index) =>
<div key={index} className={resposta.status}> <ion-icon name={resposta.name} ></ion-icon> </div>)}

</div>
</div>

      </div>


    )
    
    

  }