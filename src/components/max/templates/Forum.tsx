import React, { useState } from 'react';

interface InputBoxProps {
  onInputChange: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default InputBox;
