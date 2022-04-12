import React,{useState} from 'react';
import PropTypes from 'prop-types';


export default function AddCategory(props) {
    const { setCategories } = props;
    const [inputValue, setinputValue] = useState("");

    const handleInputchange =  (e) => {
    setinputValue(e.target.value)   
    } 

    const handleSubmit =  (e) => {
        e.preventDefault();
        ////////////////
        if(inputValue.trim().length > 2 ){
        setCategories((e) => ([inputValue, ...e ]) );
        setinputValue("");    
        }
        // console.log("submit hecho ")
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>{inputValue} </h1>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputchange}
        />
    </form>
  )
}

AddCategory.propTypes = {
     
    setCategories: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
    handleInputchange: PropTypes.func,

}