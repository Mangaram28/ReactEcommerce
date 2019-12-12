import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox/Searchcomponent';
import Userdata from './Userdata';


class Card extends React.Component{
constructor(props){
    super(props);

    this.state= {
        Users: Userdata,
        searchField:'',
        Title:'Card',
        Check:true
    };

    console.log(props);

}


  componentDidMount(){
     // fetch('https://picsum.photos/v2/list').then(response => response.json()).then(user => this.setState({Users: user}));
  }
  

  handlechange = (e) => {

    {console.log(this.state.Users[0].author)}
    
    const {name,value} = e.target;
    this.setState({
      [name]: value
    });
  } 

  /*callback and prevState check*/
  /*handlecheck = (e) => {
    this.setState((prevState) => {
        return {'Check': !prevState.Check}
    },() => console.log(this.state.Check))
  }*/
 
    render(){
   
        const {Users,searchField} = this.state;
        //filter to find state
        const Filteruser = Users.filter(users => 
            users.author.toLowerCase().includes(searchField.toLowerCase())
        )
         

        return(
                <div>
                  
                      <div className="row justify-content-center">
                                <h1>{this.state.Title.toUpperCase()}</h1>
                      </div>  
                      <div className="row justify-content-center">
                               <input type="search" placeholder="Change title" name="Title" onChange={this.handlechange}/> 
                      </div>
                      {/*<input type="search" placeholder="name" onChange={e => 
                        this.setState({searchField: e.target.value})
                                        }/>*/}  
                                     
                       <br/><br/>
                       <SearchBox handlechange={this.handlechange}/>

                       <CardList Users={Filteruser}></CardList>
                      
                </div>
        )
    }
}



export default Card;