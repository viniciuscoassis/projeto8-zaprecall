export default function BarraInferior({tamanhoDeck, iconesRespostas, contador}) {
// ainda precisar de quantidade de feitos
// ainda precisar de estado de acertos

    return(

      <div className="barraInferior">

<div className="concluidos">{contador}/{tamanhoDeck} CONCLUÍDOS </div>

<div className="icons"> 

{iconesRespostas.map((resposta,index) =>
<div key={index} className={resposta.status}> <ion-icon name={resposta.name} ></ion-icon> </div>)}

</div>

      </div>


    )
    
    

  }