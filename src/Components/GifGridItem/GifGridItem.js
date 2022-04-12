import React from 'react';
import 'animate.css';

export default function GifGridItem(props) {
  const {  title, url } = props;

  
  return (
    <div className='card animate__animated animate__heartBeat'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
