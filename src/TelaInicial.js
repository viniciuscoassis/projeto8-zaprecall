export default function TelaInicial({setTela, tela}){

    return (

    <div className="telaInicial "> 

    <div className="container">
       <img src="./img/image 1.png" />
       <h1>ZapRecall</h1>
       <button onClick={()=> setTela(!tela)}>Iniciar Recall!</button>
    </div>
    
    </div>

    )
}