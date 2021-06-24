
//Aqui le da estructura a la informacón 
import React from 'react'

export const GifGridItem = ({title, url}) => {
    
    console.log(title, url);
    return (
        <div className="card">
          <img src={url} alt={title}></img>
          <h3> {title} </h3>
        </div>
    )
}
