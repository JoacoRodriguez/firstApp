import React, { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) =>{
        setinputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()

        const ingresa = inputValue.trim(); 

        if(ingresa.length <= 1 )return;

        setinputValue('')
        onNewCategory(ingresa)
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder="Buscar Gifs" 
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
)
}
