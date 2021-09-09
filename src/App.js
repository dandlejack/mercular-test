import './App.css';
import { useState, useRef } from 'react'
import { Exam1, Exam2, Exam3 } from './util/ExamFunction';
import { ExamOneTwo } from './components/ExamOneTwo/ExamOneTwo';
import { ExamThree } from './components/ExamThree/ExamThree';
function App() {
  

  return (
    <div className="App">
      <div className='mt-10'>
        <ExamOneTwo />
        <ExamThree />
      </div>
    </div>
  );
}

export default App;
