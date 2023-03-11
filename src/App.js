import React, {useState} from 'react';
import {FiSearch}  from 'react-icons/fi'
import './sttyles.css';
import api from './services/api';



function App() {

const [input, setInput] = useState('');
const [cep, setCep] = useState({})

async function botaoalert(){
  // 69029100/json/

  if(input === ''){
    alert("Preencha algum cep!")
    return;
  }

  try{
    const reponse = await api.get(`${input}/json`)
   setCep(reponse.data)
   setInput("")

  }catch{
  alert("Ops erro ao buscar!");
  setInput("");
  }

}


  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className='containerInput'>
       <input 
       type='text'
       placeholder='Digite seu cep...'
       value={input}
       onChange={(event) => setInput(event.target.value)}
       />

       <button className="buttonSearch" onClick={botaoalert}>
        <FiSearch size={25} color='#FFF' />
       </button>
      </div>
       {Object.keys(cep).length > 0 && (

        <main className='main'>
         <h2>CEP: {cep.cep}</h2>
         <span>{cep.logradouro}</span>
         <span>complemento: {cep.complemento}</span>
         <span>Bairro:{cep.bairro}</span>
         <span>Cidade:{cep.localidade} - {cep.uf}</span>
       </main>
       )}
    </div>
  );
}

export default App;
