import React from 'react';

import '../styleshet/Card.css';


function Card(props) {
    return (
        <div className='card-container'>
            <p className='text-gray'>{props.comment}</p>

            <div>
                <img className='img-profile' src={require(`../img/${props.imagen}.jpg`)} alt="" />
                <h3 className='text-blue'>{props.nombre}</h3>
                <p className='text-gray'> {props.cargo} </p>
            </div>
        
        </div>
    );
}

export default Card; 