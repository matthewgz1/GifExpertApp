

 export const getGif = async( categorias) => {
    //const url ='api.giphy.com/v1/gifs/search?q=SLIME&limit=10&api_key=2PjvOWmF4XsWzzRZs5UCQMn6awP2Fsff'
    const url = `https://api.giphy.com/v1/gifs/search?q= ${encodeURI(categorias)} &limit=10&api_key=2PjvOWmF4XsWzzRZs5UCQMn6awP2Fsff`
    const resp = await fetch( url);
    const { data } =  await resp.json();

    //console.log(data);
    const gifs = data.map ( img => {
        return{
            id:img.id,
            title: img.title,
            url:img.images?.downsized_medium.url

        }
        
    })

    return gifs

}

// getGif()