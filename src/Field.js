import React from 'react';
import './Field.css';
{/* This Component is the Field Component which takes the name and stack img as 
props and displays like a card in the Home Page. */}
function Field({name,stack_image}) {
    return (
        <div className='field'>
            <img className='stack_image' src={stack_image} alt=''/>
            <div className='field_name'>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Field