import React, { useState } from 'react';
import x from "../../assets/img/x.svg";
import "../AddAndRemoveIngredients/AddAndRemoveIngredients.css";
import plusicon from "../../assets/img/+.svg"

const AddAndRemoveIngredients = () => {
    const [elements, setElements] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addElement = () => {
        if (inputValue.trim() !== '') {
            setElements([...elements, inputValue]);
            setInputValue('');
        }
    };

    const removeElement = (index) => {
        const newElements = [...elements];
        newElements.splice(index, 1);
        setElements(newElements);
    };

    return (
        <div className='add-remove-ingredients'>
            <input
                placeholder='Añade un ingrediente'
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='add-btn' onClick={addElement}>
                Agregar
                <img src={plusicon} alt="+ Icon" />
            </button>
            <ol >
                {elements.map((element, index) => (
                    <li key={index}>
                        {element}
                        <button className='remove-btn' onClick={() => removeElement(index)}>
                            <img src={x} alt="X Icon" />
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default AddAndRemoveIngredients;