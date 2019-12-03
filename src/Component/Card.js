import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox/Searchcomponent';


class Card extends React.Component{
constructor(){
    super();

    this.state= {
        Users:[],
        searchField:''
    };

   
}


  componentDidMount(){
      fetch('https://picsum.photos/v2/list').then(response => response.json()).then(user => this.setState({Users: user}));

  }
  

  handlechange = (e) => {
    this.setState({searchField: e.target.value});
  } 
 
    render(){
   
        const {Users,searchField} = this.state;
        //filter to find state
        const Filteruser = Users.filter(users => 
            users.author.toLowerCase().includes(searchField.toLowerCase())
           )

        return(
                <div>
                       <h1>Card</h1>
                      {/*<input type="search" placeholder="name" onChange={e => 
                        this.setState({searchField: e.target.value})
                                        }/>*/}  

                       <SearchBox handlechange={this.handlechange}/>

                       <CardList Users={Filteruser}></CardList>
                      
       
                </div>
        )
    }
}



export default Card;