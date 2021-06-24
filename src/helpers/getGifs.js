
//Aqui lee el json y lo convierte en un objeto java desestructurado

export const getGifs = async( category) =>{
    const url =   `https://api.giphy.com/v1/gifs/search?api_key=zrYWIg6VZTdlmbFxAffO7qszVqov67s5&q=${encodeURI(category)}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
    })
    return gifs;
}