import React from 'react';
import { Button } from './Button';

const Card=(props)=>{
    const {img,title,description}=props;
    return <>
    <div className='card'>
        <div className='card__header'>
            <img src={img} alt='dummy img' style={{ width: '230px', height: '240px', borderRadius: '10px' }}/>
        </div>
        <div className='card__body'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className='card__footer'>
            <Button label='Add to cart' backgroundColor='green'/>
            <Button label='Buy now' backgroundColor='blue'/>
        </div>
    </div>
    
    </>
}
export default Card;