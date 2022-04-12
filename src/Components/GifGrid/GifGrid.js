import React,{ useEffect, useState } from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifGridItem from '../GifGridItem/GifGridItem';
import { getGifs } from '../helpers/getGifs/getGifs';

export default function GifGrid(props) {
    const { categories: category } = props;

    const {data: imgs, loading} = useFetchGifs(category);
    


    // const [images, setImages] = useState([]);
    


    
    


  return (
      <>
            {/* SE REALIZA APARTIR DEL USESTATE DE AHI SE TOMA LA PRIMER VARIABLE Y SE PONE COMO ARRAY */}
            {/* TAREA RESUELTA MAPEAR 1- metodo es (img.id) 2 metodo es ({id,title}) desestructuracion de objetos */}
    <h3 className='animate__animated animate__heartBeat'>{ category }</h3>
    { loading && <p className='animate__animated animate__flash'>Cargando............</p> }
    <div className='card-grid'>
            {imgs.map((img, index)=>(
                <GifGridItem key={ img.id} {...img} />
            ))}
        
    </div>
    </>
  );
}
