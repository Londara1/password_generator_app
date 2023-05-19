import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Copy from "./assets/images/icon-copy.svg";
import Arrow from "./assets/images/icon-arrow-right.svg";
import {useEffect } from 'react';



function App() {
  const [characterLength, setCharacterLength] = useState(5);
  const [password, setPassword] = useState("PTx1f5DaFX");
  const [uppercase, setUppercase] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const [uppercaseChecked, setUppercaseChecked] = useState(false);
  const [lowercase, setLowercase] = useState("abcdefghijklmnopqrstuvwxyz");
  const [lowercaseChecked, setLowercaseChecked] = useState(false);
  const [numbers, setNumbers] = useState("0123456789");
  const [numbersChecked, setNumbersChecked] = useState(false);
  const [symbols, setSymbols] = useState("!@#$%^&*()<>,.?/[]{}-=_+|/");
  const [symbolsChecked, setSymbolsChecked] = useState(false);
  const [copied, setCopied] = useState(false);

  let count = 0;


  if (uppercaseChecked) {
    count++;
  }
  if (lowercaseChecked) {
    count++;
  }
  if (numbersChecked) {
    count++;
  }
  if (symbolsChecked) {
    count++;
  }

  if (count == 1 ) {

  }

const strengthLevels = count == 1 ? "TOO WEAK!" : count == 2 ? "WEAK" : count == 3 ? "MEDIUM" : count == 4 ? "STRONG": "";

function colorChanger(boxNumber) {
  if (count == 1 && boxNumber == 1) {
    return { backgroundColor: '#F64A4A', borderWidth: 0 };
  } else if (count == 2 && boxNumber <= 2) {
    return { backgroundColor: '#FB7C58', borderWidth: 0 };
  } else if (count == 3 && boxNumber <= 3) {
    return { backgroundColor: '#F8CD65', borderWidth: 0 };
  } else if (count == 4 && boxNumber <= 4) {
    return { backgroundColor: '#A4FFAF', borderWidth: 0 };
  }
}


  const handleUppercaseChecked = (event) => {
    setAgreement(event.target.checked);
  }

  const handleChanger = (event) => {
    setCharacterLength(event.target.value);
  }

  const makePassword = () => {
    const passwordCharacter = [];
    if (uppercaseChecked) {
      passwordCharacter.push(uppercase);
    }

    if (lowercaseChecked) {
      passwordCharacter.push(lowercase);
    }

    if (numbersChecked) {
      passwordCharacter.push(numbers);
    }

    if (symbolsChecked) {
      passwordCharacter.push(symbols);
    }

    let newPassword = "";

    for (let i = 0; i < characterLength; i++) {
      const randomType = Math.floor(Math.random() * passwordCharacter.length);
      const randomCharacter = Math.floor(Math.random() * passwordCharacter[randomType].length);
      const newCharacter = passwordCharacter[randomType][randomCharacter];
      newPassword += newCharacter;
    }
    setPassword(newPassword);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000)
  };

  useEffect(() => {
    const greenLine = document.querySelector('.greenLine');
    const newWidth = characterLength > 5 ? (characterLength - 5) * 10 + '%' : '0%';
    greenLine.style.width = newWidth;
  }, [characterLength]);



  return (
    <>
    <h1 className="heading">Password Generator</h1>

    <div className="passwordDiv">
      <h1 className="generatedPassword">{password}</h1>
      <div className="copyDiv">
        {copied && <h1 className="copied">COPIED</h1>}
        <div className="copyImgDiv">
        <svg 
          width="21"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleCopyClick}
          >
          <path
            className="copyImg"
            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" 
            fill="#A4FFAF"/> 
          </svg>

        </div>
      </div>
    </div>


    <div className="secondPart">
    <div className="lettersAdjusterText">
      <h1 className="character">Character Length</h1>
      <h1 className="characterLength">{characterLength}</h1>
    </div>

    <div className="priceAdjusterDiv">
      <input type="range" className="characterAdjuster" defaultValue={0} min={5} max={15} step={1} onChange={handleChanger} />
      <div className="greenLine"></div>
    </div>

    <div className="checkBoxes">
      <label className="uppercase">
        <input type="checkbox" name="checkbox" onChange={() => setUppercaseChecked(!uppercaseChecked)} />Include Uppercase Letters
      </label><br/>

      <label className="lowercase">
        <input type="checkbox" name="checkbox" onChange={() => setLowercaseChecked(!lowercaseChecked)}/>Include Lowercase Letters
      </label><br/>

      <label className="numbers">
        <input type="checkbox" name="checkbox" onChange={() => setNumbersChecked(!numbersChecked)} />Include Numbers
      </label><br/>

      <label className="symbols">
        <input type="checkbox" name="checkbox" onChange={() => setSymbolsChecked(!symbolsChecked)}/>Include Symbols
      </label><br/>

    </div>

    <div className="strengthShower">
      <h1 className="qualityText">STRENGTH</h1>

      <div className="qualityShower">
        <h1 className="quality">{strengthLevels}</h1>

        <div className="qualityBox">
          <div className="qualityBox1" style={colorChanger(1)}></div>
          <div className="qualityBox2" style={colorChanger(2)}></div>
          <div className="qualityBox3" style={colorChanger(3)}></div>
          <div className="qualityBox4" style={colorChanger(4)}></div>
        </div>
        
      </div>
    </div>
    
    <button className="generateButton" onClick={() => makePassword()} >GENERATE 
      <svg
        className="arrowImg"
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
      </svg>
    </button>

    </div>
    </>
  )
}

export default App;
