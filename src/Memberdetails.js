import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import './Memberdetails.css'

function Memberdetails() {

    const {id} = useParams();
    const [data, setData] = useState([]);

    //Now what i shoud do is i should make the id of the filed as dynamic so that we can access the Opensourse or Amhacks or CP anything.
    //Now we can add this query dynamically by that dollar and it should be enclosed in semicolon bcz i had seen an error in netwok tab of inspect saying that we need string.
    const query = `query{
        memberById(id:${id}){
           name
           image
           intro
           description
           githubusername
           discordusername
           email
           phone
       }
     }`

    useEffect(() => {
        const sendingPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({query}),
        };

         fetch('https://member-details-backend.herokuapp.com/graphql', sendingPost)
            .then(response => response.json())
            .then(data => setData(data.data.memberById));
    },[])

    console.log(data);

    const githuburl= "https://github.com/"+data.githubusername;
    const langurl = "https://github-readme-stats.vercel.app/api/top-langs/?username="+data.githubusername+"&theme=radical&layout=compact";
    const staturl = 'https://github-readme-stats.vercel.app/api?username='+data.githubusername+'&theme=radical&show_icons=true';

    return (
        <div className='member_details'>
            <div className="upperpart">
                <div>
                <img className='detail_image' src ={data.image} alt="There Used to be an Image" />
                <p className='memberdetail_name'>{data.name}</p>
                </div>
                <div className='contact_details'>
                    
                    <div className='githuburl'>
                        <p><a className='githuburllink'href={githuburl} target='main_page'>Github</a></p>
                    </div>
                    <div className='further_contact'>
                        <br/>
                        <p>Email:{data.email}</p>
                        <p>Phone:{data.phone}</p>
                        <p>Discord:{data.discordusername}</p>
                    </div>
                </div>
            </div>
            <div className="lowerpart">
                <div>
                    <p className='description'>{data.description}</p>
                </div>
                <div className='stats'>
                    <div> <img className='stat_img' src={staturl} /></div>
                    <div> <img className='lang_img' src={langurl} /></div>
                </div>
            </div>
        </div>
    )
}

export default Memberdetails
