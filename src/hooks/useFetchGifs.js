import {useState, useEffect } from 'react';
import { getGifs } from '../Components/helpers/getGifs/getGifs';

export const useFetchGifs = ( category )=> {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    //no pueden ser async 
    useEffect(() => {
        getGifs( category ).then( (imgs) => {
            
            
                setState({
                    data: imgs,
                    loading: false
                });
                
            
        });
    }, [category]);

    

    return state; // es el objeto que contiene  {data[], loading true}
}