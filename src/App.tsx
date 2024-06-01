import React from 'react';
import './App.css';
import {RenderService} from "./service/render/render.service";
import {Modal1} from "./component/modal1/modal1";
import {Modal2} from "./component/modal2/modal2";

function App() {
  const renderService = RenderService.getInstance()

  return (
    <div className="App">
      <button onClick={() => renderService.add({component: <Modal1 info1={'info1'} info2={'teste'}/> })}>Abrir modal 1</button>
      <button onClick={() => renderService.add({component: <Modal2/> })}>Abrir modal 2</button>
    </div>
  );
}

export default App;
