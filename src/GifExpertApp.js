
//Llama a la funcion para agregar las categorias asi como darle estructura 
import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( ) =>{
    const [categorias, setCategorias] = useState( ['Game of Thrones']);
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}></AddCategory>
            <hr></hr>
            <ol>
                {
                categorias.map( (category) =>
                        <GifGrid 
                            key={category}
                            category={category}>
                        </GifGrid>
                    )
                }
            </ol>
        </>
    )

}