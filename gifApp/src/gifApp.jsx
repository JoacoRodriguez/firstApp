import React, { useState } from 'react'
import { AddCategory, GifGrilla } from "./components";



export const GifApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ])

    const onAddCategory = (NewCategory) =>{

        if(categories.includes(NewCategory))return;

        setCategories([NewCategory, ...categories ])
    }

    return (
        <>
            <h1>gifApp</h1>
            <AddCategory 
                onNewCategory = {value =>onAddCategory(value)}
            />
                {categories.map( (categoria) =>(
                        <GifGrilla 
                        key={categoria}
                        categoria={categoria}/>
                    )
)} 
        </>
    )
}
