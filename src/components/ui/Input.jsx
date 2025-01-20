import { useState, useEffect } from "react";

import inputStyles from "./Input.css";

const Input = ({ id, placeholder, setValue, value, type }) => {
  // const [vale, setVale] = useState('')
  const [isFocused, setIsFocused] = useState(false);

  const onFoucs = () => {
    setIsFocused(true);
  };
  const onBlur = () => {
    if (value.length > 0) {
      setIsFocused(true);
    }
    setIsFocused(false);
  };

  useEffect(() => {
    console.log(value);
    if (value.length > 0) {
      setIsFocused(true);
    }
  }, [value]);

  return (
    <div className={inputStyles.container}>
      <label htmlFor={id} className={inputStyles.label({ isFocused })}>
        {placeholder}
      </label>
      <input
        className={inputStyles.input}
        onFocus={onFoucs}
        onBlur={onBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type ?? "email"} //이거의미 찾아보기
        id={id}
      />
    </div>
  );
};

export default Input;
