import React from 'react';
import { Link } from 'react-router-dom';

class CardList extends React.Component{

    render(){
        return(
            <div className="row">
                  {this.props.Users.map((user,index) =>
                 
                        <div className="card col-sm-3 mt-3 mb-3 imageSet" key={index}>
                               
                               <img className="card-img-top " src={user.download_url} alt="Card image" style={{height:'180px'}}/>
                                <div className="card-body">
                                <h4 className="card-title">{user.author}</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to={`/Profile/${index}`} className="btn btn-primary">See Profile</Link>
                                </div>
                        </div>
                    
                  )} 
            
            </div>              
        )
    }
}


export default CardList;