import React from 'react'
import Field from './Field'
import './Home.css'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { TwitterTimelineEmbed} from 'react-twitter-embed';


function Home() {

    //This is to request the server to send 
    //the data from the server by posting a
    //query.
    const [data, setData] = useState([]); 
    const [searchTerm,setSearchTerm] = useState('')

    useEffect(() => {
        const sendingPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{"query": "{allCategories{id,name,stackImage}}"}'
        };

         fetch('http://127.0.0.1:8000/graphql', sendingPost)
            .then(response => response.json())
            .then(data => setData(data.data.allCategories));
    },[])
    console.log(data);

    //Posting is till here.

    return (
        <div className='home'>
            <div>
                <TwitterTimelineEmbed
                className='twitterfeed'
                sourceType="profile"
                screenName="amfoss_in"
                theme='dark'
                noFooter
                options={{height: 980}}
                noScrollbar
                />
            </div>
            <div className='home_2'>
                <div>
                    <input className='searchbar_home' type='text' placeholder='Search member' onChange={ event => {setSearchTerm(event.target.value)}}/>
                </div>
                <img className='landing_image' src='https://i.postimg.cc/yxsJ61rG/4380-removebg-preview.png' alt=''/>
                <div className='fields'>
                    {

                        //Here this filter is for showing data according to the serachbar text.
                        //There we are providing like if it is empty show all the fields or else 
                        //show the field which that text as subpart it shows even it is lowercase 
                        //as we are proving the lowercase optn.
                        data.filter(
                            (field)=>{
                                if(searchTerm==''){
                                    return field
                                }else if(field.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return field
                                }
                            }
                        ).map((field) => (
                                <Link to={`/fielddetails/${field.id}`} style={{textDecoration:'none'}}>
                                    <Field className='field'
                                    stack_image={field.stackImage}
                                    name={field.name}
                                    />
                                </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home