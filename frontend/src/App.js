import React, {useState} from 'react';
import api from './services/api';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  //Use state returns a array
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/sessions', { email });
    alert(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="airCnC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre  <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email"  placeholder="Seu melhor email" onChange={event=>setEmail(event.target.value)}  value={email}/>
          <button type="submit" className="btn">ENTRAR</button>
        </form>
      </div>
    </div>
  );
}

export default App;
