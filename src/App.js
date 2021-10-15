import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [qtd, setQtd] = useState('');
  const [jogadores, setJogadores] = useState([]);

  useEffect(()=>{
   
    inputJogador()
    
  }, [qtd]);

  function setJogador(i,value){
    setJogadores() = value;
    console.log(jogadores);
  }

  function inputJogador(){
    var jogador = [];
    for (let i = 0; i < qtd; i++) {
      jogador.push(<input key={i} className="mx-2 my-1 col-md-6" type="text" placeholder={"Jogador "+(i+1)} onChange={e => {setJogador(i,e.target.value)}}/>)
    }
    return (
      jogador
    )                    

  }
  return (
    <div className="App">
      <div className="col-12 container">
        <div className="col-lg-6 ">
          <div className="card mt-4">
            <div className="card-header">
              <b className="card-title">Sorteio das Casas - GOT Board Game</b>
            </div>
            <div className="card-body">
              <div className="col-md-12">
                <h5 className="col-md-12">Selecione a quantidade de jogadores:</h5>
                <span className="mx-2 radio"><input type="radio" name="qtd" value="3" onChange={(e) => setQtd(e.target.value)}/> 3</span>
                <span className="mx-2 radio"><input type="radio" name="qtd" value="4" onChange={(e) => setQtd(e.target.value)}/> 4</span>
                <span className="mx-2 radio"><input type="radio" name="qtd" value="5" onChange={(e) => setQtd(e.target.value)}/> 5</span>
                <span className="mx-2 radio"><input type="radio" name="qtd" value="6" onChange={(e) => setQtd(e.target.value)}/> 6</span>
                <span className="mx-2 radio"><input type="radio" name="qtd" value="7" onChange={(e) => setQtd(e.target.value)}/> 7</span>
                <span className="mx-2 radio"><input type="radio" name="qtd" value="8" onChange={(e) => setQtd(e.target.value)}/> 8</span>
              </div>
              <hr/>
              <div id="div-jogadores" className="col-md-12">
                <h5 className="col-md-12">Digite o nome dos jogadores: </h5>
                {inputJogador()}
              </div>
              <div id="div-resultado" className="col-md-12">
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default App;
