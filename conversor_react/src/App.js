import React from 'react';
import './App.css';
import Conversor from './componentes/Conversor'
import Card from './componentes/Card'

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>

      <div className="Cards">
      <Card titulo = "Dolar e Real">
      <Conversor moedaA = "USD" moedaB= "BRL"></Conversor>
      <Conversor moedaA = "BRL" moedaB= "USD"></Conversor>
      </Card>


      <Card titulo = "Euro e Real">
      <Conversor moedaA = "EUR" moedaB= "BRL"></Conversor>
      <Conversor moedaA = "BRL" moedaB= "EUR"></Conversor>
      </Card>
      
      </div>
    </div>
    

  );
}


export default App;
