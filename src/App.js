import {useEffect, useState  } from 'react';
import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';

import Input from './components/Input.js';
import './assets/all.scss'


function App() {
  const [text ,setText] = useState('');
  const onChangeHandler = (e) =>{
    setText(e.target.value);
  };

// 因為 strict mode 造成兩次
useEffect(() => {
  // console.log(process.env.REACT_APP_PATH);
  (async()=>{
    await axios.get(process.env.REACT_APP_PATH)
    .then((res) => {
      console.log( res);
    })
    .catch((rej)=>{
      console.log(rej);
    })

  })()
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam fugiat aperiam cum minima praesentium exercitationem rerum optio perferendis, eius officiis dolores consequuntur expedita, debitis ex cumque, nostrum saepe doloribus. Accusamus.
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" className="btn btn-primary">Primary</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input id="sample" text="這是一個input" value={text} onChangeHandler={onChangeHandler} />
        {text}
      </header>
    </div>
  );
}

export default App;
