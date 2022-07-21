export default function BarraInferior({tamanhoDeck, iconesRespostas, contador}) {
// ainda precisar de quantidade de feitos
// ainda precisar de estado de acertos

    return(

      <div className="barraInferior">

<div className="concluidos">{contador}/{tamanhoDeck} CONCLUÍDOS </div>

<div className="icons"> 


<div className="Errou"> <ion-icon name="close-circle" ></ion-icon> </div>
<div className="Quase"><ion-icon name="help-circle"></ion-icon></div>
<div className="Zap"><ion-icon name="checkmark-circle"></ion-icon></div>

</div>

      </div>


    )
    
    

  }