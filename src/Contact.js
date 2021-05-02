import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className='mail_image'>
                <img className='contact_image' src='https://i.postimg.cc/wvTvnfyK/3156814-removebg-preview.png' alt=''/>
            </div>
            <div className='contact_text'>
               <form>
                    <input type='text' placeholder='Name' required/>
                
                    <input type='text' placeholder='Email' required/>
                
                    <textarea className='message' type='text' placeholder='Message' required/>

                    <input className='button' type='submit'/>
                </form>
            </div>
        </div>
    )
}

export default Contact
