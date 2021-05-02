import React from 'react'
import './Member.css'

function Member({image,name,intro}) {
    return (
        <div className='member'>
            <div className="card">
                <header>
                    <h className='member_name'>{name}</h>
                </header>
                <hr></hr>
                <div className='shortinfo'>
                    <div>
                        <img className='member_image' src={image}/>
                    </div>
                    <div>
                        <p>{intro}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member
