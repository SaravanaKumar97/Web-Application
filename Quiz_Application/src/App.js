import './App.css';
import React from 'react';
import questions from './component/questions';
import {useState} from 'react';
function App() {
  const [questionIndex, setquestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState(false);
  const present_question = questions[questionIndex];
  const get_choice = (i) =>{
    if(present_question.answer===i){
      setScore(score+1);
    }
    const next_question= questionIndex+1;
    if(next_question<questions.length){
      setquestionIndex(questionIndex+1);
    }
    else{
      setResults(true);
    }
  }
  const replay = ()=>{
    setquestionIndex(0);
    setScore(0);
    setResults(false);
  }
  return (
    <div className="App">
      <div className='quiz-outline'>
          {results?(<><h1>You Score is<br/><br/>{score}</h1><br/><button onClick={replay}> Play Again </button> </>):(<><div className='quiz-questions'>
        <h2>{present_question.question}</h2>
        </div>
        <ul className='quiz-options'>
        {present_question.options.map((options, i) => { 
  return <li className='quiz-option' onClick={()=>{get_choice(i)}}>{options}</li>
})}
        </ul></>)}
        </div> 
    </div>
  );
}
export default App;




