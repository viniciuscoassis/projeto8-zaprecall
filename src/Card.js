export default function Card({setPedeResposta,PedeResposta,setEscolheuCard,EscolheuCard, trabalhaResposta, pergunta, resposta, numPergunta}){

    return (
<div className= {`card ${EscolheuCard}`} onClick={() => setEscolheuCard("EscolheuCard")}>
        <div className={`cartaCostas ${EscolheuCard}`}>
          <h3 > Pergunta {numPergunta} </h3>
          <ion-icon name="play-outline"></ion-icon>
        </div>

        <div className={`cartaConteudo ${EscolheuCard} ${PedeResposta}`}>
          {pergunta}
          <img src="./img/turn.png" onClick={() => setPedeResposta("PediuResposta")}></img>
        </div>

        <div className={`cartaResposta ${PedeResposta}`}>
          {resposta}
          <div className="boxes">
            <div onClick={() => trabalhaResposta("errou")}>Não lembrei</div>
            <div onClick={() => trabalhaResposta("quase")}>Quase não lembrei</div>
            <div onClick={() => trabalhaResposta("zap")}>Zap!</div>
          </div>
        </div> 
      </div>
    )
}
