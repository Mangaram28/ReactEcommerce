import React from 'react';
import Userdata from '../Userdata';

class UserProfile extends React.Component{
    
    render(){
        console.log(this.props);
        const { params } = this.props.match;
        
        console.log(params);

        
       
      
                return(
                        <div>
                            <h1>User Profile</h1>
                            <img src={`${Userdata[params.id].download_url}`} class="img-thumbnail" alt="Cinque Terre" width="304" height="236"/> 
                            <h1>{Userdata[params.id].author}</h1>
                        </div>
                )
       
    }
}

export default UserProfile; 