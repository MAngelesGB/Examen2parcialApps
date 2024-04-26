import { useState } from 'react'
import './App.css'
import './assets/corona.png'


function App() {
  let arrStr;
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]; 
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  function repetir(word, arrStr){
    let count = 0;
    arrStr.forEach((element) => {
      if (element === word) {
        count++;
      }
    });
    return count;
  }
  function getImagesNumbers(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'corona kong';
    } else if (number % 3 === 0) {
      return 'corona';
    } else if (number % 5 === 0) {
      return 'kong';
    } else {
      return 'no hay imagen';
    }
  }

  return (
    <>
      <h1>Kong</h1>
      {array.map((number, key) => (
        <div key={key}>
          <p>{number}</p>
          <p>{getImagesNumbers(number)}</p>
        </div>
      ))}

      <h2>Strings</h2>
      {arrStr = value.split(" ")}
      <div>
        <input type="text" value={value} onChange={handleChange} />

        <p>Palabras:{arrStr.length}</p>
        <p>{arrStr.map((word, key) => (
          <p key={key}>{word}:{word.length} repite:{repetir(word,arrStr)}</p>
          
        ))}</p>
        
      </div>
      
    </>
  )
}

export default App
