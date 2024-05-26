import React from 'react';
// import { Transliterate } from 'react-transliterate'; // Assuming 'react-transliterate' is the library you're using
import { ReactTransliterate } from 'react-transliterate';
function InputTranslater({ type, className, id, value, name, onChangeText, toLanguage,placeholder }) {
    const handleChange = (transliteratedValue) => {
        // Pass the transliterated value to the parent component's onChange function
        onChangeText(transliteratedValue);
    };

      // Set a consistent height for the input field
      const inputStyle = {
        height: '38px', // or any desired height
    };
 
    // Conditional rendering based on toLanguage
    if (toLanguage !== 'en') {
        return (
           
            <ReactTransliterate
                type={type}
                className={className}
                id={id}
                name={name}
                value={value}
                onChangeText={handleChange}
                fromLanguage="en"
                toLanguage={toLanguage}
                style={inputStyle}
                placeholder ={placeholder}
            />
        );
    } else {
        // Render a regular input element when toLanguage is 'en'
        return (
            <input
                type={type}
                className={className}
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChangeText(e.target.value)}
                style={inputStyle}
                placeholder ={placeholder}

            />
        );
    }


}

export default InputTranslater;
