import React from "react";

const SetValorInputs = ({
  inputValue,
  setInputValue,
  portionValue,
  setPortionValue,
  timeValue,
  setTimeValue,
}) => {
  const handleIncrement = () => {
    const newValue = Math.min(inputValue + 1, 10);
    setInputValue(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(inputValue - 1, 1);
    setInputValue(newValue);
  };

  const handlePortionIncrement = () => {
    const newValue = Math.min(portionValue + 1, 10);
    setPortionValue(newValue);
  };

  const handlePortionDecrement = () => {
    const newValue = Math.max(portionValue - 1, 1);
    setPortionValue(newValue);
  };

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
    <section className="cont-details-recipe">
      <div className="set-difficulty">
        <label htmlFor="difficulty">
          <input
            type="number"
            id="difficulty"
            name="difficulty"
            min="1"
            max="10"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <span>/10</span>
        </label>
        <p className="p-set-style">Dificultad</p>
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
            min="1"
            max="10"
            value={portionValue}
            onChange={(e) => setPortionValue(e.target.value)}
          />
          <span>+</span>
        </label>
        <p className="p-set-style">Porciones</p>
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
        <p className="p-set-style">Tiempo</p>
        <div className="plus-minus-btn">
          <span onClick={handleTimeDecrement}>-</span>
          <span onClick={handleTimeIncrement}>+</span>
        </div>
      </div>
    </section>
  );
};

export default SetValorInputs;
