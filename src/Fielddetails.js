import React from 'react'
import './Fielddetails.css'
import Member from './Member'
import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

{/* In this component we are getting for getting the
 members by category id i had created a schema in the django
 and there here i am using the id for getting all the details 
 and to show those details in the Fielddetails page.*/}

function Fielddetails() {

    const {id} = useParams();
    const [data, setData] = useState([]);
    const [searchmember,setSearchmember] = useState('')

    {/* Here I had created an schema in backend for making a query and getting the members by id of the category
    This is bcz as we know th id of the field it will become easy to link these by that Route
    Parameters. */}

    {/*Now what we shoud do is we should make the id of the field as dynamic so that 
       we can access the Opensourse or Amhacks or CP anything and that can be achieved 
       by dollar sign with `` in JS*/}
    
    const query = `query{
        categoryById(id:${id}){
          members{
           id
           name
           image
           intro
           description
           githubusername
           discordusername
           email
           phone
         }
       }
     }`

    useEffect(() => {
        const sendingPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({query}),
        };

        {/*Here we have to get the members so we are writing like data.data.categoryById.members */}
         
        fetch('https://member-details-backend.herokuapp.com/graphql', sendingPost)
            .then(response => response.json())
            .then(data => setData(data.data.categoryById.members));
    },[])

    console.log(data);

    return (

        <div>
            <div>
            <input className='searchbar_members' placeholder='Search Member' type='text' onChange={(event) => {setSearchmember(event.target.value)}}/>
            </div>
            <div className='members'>
            {
                //Here we are mapping that each data name and intro to each member 
                //and linking to the respective member detail page using that Route Parameters by that {`/members/${member.id}`} 
                data.filter((member)=>{
                    if(searchmember==''){
                        return member
                    }else if(member.name.toLowerCase().includes(searchmember.toLowerCase())){
                        return member
                    }
                }).map((member) => (
                    <Link to={`/members/${member.id}`} style={{textDecoration:'none'}}>
                    <Member
                    name={member.name}
                    image='https://www.w3schools.com/w3css/img_avatar3.png'
                    intro={member.intro}
                    />
                    </Link>
                ))
            }
            </div>
        </div>
    )
}

export default Fielddetails            
