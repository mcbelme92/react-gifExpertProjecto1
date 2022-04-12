


   export const getGifs = async (category)=>{
       
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=qdTN8hycaViPdj8k1ieDi8q17jH1oxJs`;
        const resp = await fetch( url );
        const { data }= await resp.json();
        const gifs = data.map( (img) => {
            return {
                id: img.id,
                title: img.title,
                //con ? es como preguntar si contiene la siguiente propiedad antes de esta 
                url: img.images?.downsized_medium.url
            }
        }); 
        return gifs;
        
    }
  
