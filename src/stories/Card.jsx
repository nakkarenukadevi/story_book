import React from 'react';
import { Button } from './Button';

const Card=(props)=>{
    const {img,title,description,onClick}=props;
    return <>
    <div className='card'>
        <div className='card__header h-50'>
            <img src={img} alt='dummy img' style={{ width: '230px', height: '240px', borderRadius: '10px' }}/>
        </div>
        <div className='card__body h-20'>
            <div><h3>{title}</h3></div>
            <p>{description}</p>
        </div>
        <div className='card__footer flex gap-3'>
            <div><Button label='Add to cart' backgroundColor='green'/></div>
                 <div> <Button label='Buy now' backgroundColor='blue' onClick={onClick}/></div>
        </div>
    </div>
    
    </>
}
export default Card;