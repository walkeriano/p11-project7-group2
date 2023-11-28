import React, { useState } from 'react';

const SetDifficulty = () => {
  const [inputValue, setInputValue] = useState(1);

  const handleIncrement = () => {
    const newValue = Math.min(inputValue + 1, 10);
    setInputValue(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(inputValue - 1, 1);
    setInputValue(newValue);
  };

  const [portionValue, setPortionValue] = useState(1);

  const handlePortionIncrement = () => {
    const newValue = Math.min(portionValue + 1, 10);
    setPortionValue(newValue);
  };

  const handlePortionDecrement = () => {
    const newValue = Math.max(portionValue - 1, 1);
    setPortionValue(newValue);
  };

  const [timeValue, setTimeValue] = useState("00:00");

  const handleTimeIncrement = () => {
    const currentTime = new Date(`2000-01-01T${timeValue}`);
    const newTime = new Date(currentTime.getTime() + 15 * 60000);
    const formattedTime = formatTime(newTime);
    setTimeValue(formattedTime);
  };

  const handleTimeDecrement = () => {
    const currentTime = new Date(`2000-01-01T${timeValue}`);
    const newTime = new Date(currentTime.getTime() - 15 * 60000);
    const formattedTime = formatTime(newTime);
    setTimeValue(formattedTime);
  };

  const formatTime = (date) => {
    return date.toTimeString().slice(0, 5);
  };

  return (
    <section className="set-difficulty-portion-time">
      <div className="set-difficulty">
        <label htmlFor="difficulty">
          <input
            type="number"
            id="difficulty"
            name="difficulty"
            min="1" max="10"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <span>/ 10</span>
        </label>
        <p className="p-set-style">DIFICULTAD</p>
        <div className="plus-minus-btn">
          <span onClick={handleDecrement}>-</span>
          <span onClick={handleIncrement}>+</span>
        </div>
      </div>
      <div className="set-portion">
        <label htmlFor="portion">
          <input
            type="number"
            id="portion"
            name="portion"
            min="1" max="10"
            value={portionValue}
            onChange={(e) => setPortionValue(e.target.value)}
          />
          <span>+</span>
        </label>
        <p className="p-set-style">PORCIONES</p>
        <div className="plus-minus-btn">
          <span onClick={handlePortionDecrement}>-</span>
          <span onClick={handlePortionIncrement}>+</span>
        </div>
      </div>
      <div className="set-time">
        <label htmlFor="time">
          <input
            type="time"
            id="time"
            name="time"
            value={timeValue}
            onChange={(e) => setTimeValue(e.target.value)}
          />
        </label>
        <p className="p-set-style">TIEMPO</p>
        <div className="plus-minus-btn">
          <span onClick={handleTimeDecrement}>-</span>
          <span onClick={handleTimeIncrement}>+</span>
        </div>
      </div>
    </section>
  );
};


export default SetDifficulty;