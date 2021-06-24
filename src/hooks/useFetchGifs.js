//Aqui checa si cambio el componente y llama al objeto para extraer los datos necesarios
//Osea carga los componentes 

import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';
//Custom hooks

export const useFetchGifs = (category) => {
   
    const [state, setstate] = useState({
         data: [],
         loading: true
    });
        useEffect(() => {
            getGifs(category)
            .then( imgs => {
                setTimeout( () =>{ 
                    setstate({
                        data: imgs,
                        loading: false
                    });
                }, 1500)
            })
        }, [category])
     return state;
}
