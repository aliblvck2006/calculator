// Calculator.js
import React, { useState } from 'react';
import './calculatorStyle.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <>
    <div className="main">
  <div className="container">
    <div className="calculator">
        <div className="calculator_main">
            <div className="display">{input}</div>
                <div className="buttons">
                    <button onClick={handleClear}>C</button>
                    <button onClick={handleClear}>AC</button>
                    <button onClick={() => handleClick('.')}>.</button>
                    <button className='btn_style' onClick={() => handleClick('/')}>/</button>
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button className='btn_style' onClick={() => handleClick('*')}>*</button>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button className='btn_style' onClick={() => handleClick('-')}>-</button>
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button className='btn_style' onClick={() => handleClick('+')}>+</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('00')}>00</button>
                    <button className='value_style' onClick={handleCalculate}>=</button>
                </div>
            </div>
       </div>
    </div>
    </div>
    </>
  );
};

export default Calculator;
