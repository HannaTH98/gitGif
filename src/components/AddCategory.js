
//Agrega la categoria a la pantalla que se busque condicionando a que haya 2 caracteres
import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
        
        const [inputValue, setinputValue] = useState('');
        
        const handleInputChange=(e)=>{
                setinputValue(e.target.value);
        } 

        const handleSubmit = (e) =>{
            e.preventDefault();
                if(inputValue.trim().length > 2){
                    setCategorias(cats => [inputValue, ...cats,]);
                    setinputValue('');
                }
        }
                return (
                    <form onSubmit={ handleSubmit}>
                        <input type="text"
                                value={inputValue}
                                onChange={handleInputChange}>
                        </input>
                    </form>
                 )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
} 
