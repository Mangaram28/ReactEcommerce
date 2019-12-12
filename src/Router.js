import React from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Card from './Component/Card';
import UserProfile from './Component/Profile/UserProfile';
import Header from './Component/Header/HeaderSection';
import SignInSignUp from './Component/Sign-in-Sign_up/Sign-in-Sign-up-component';
import { auth, createUserProfileDocment } from './firebase/firebase.utils';



export default class Routes extends React.Component {
    constructor(props) {
        super(props);
       
        this.state=({
           currentUser : null
        });
    }

    unsubscribeFromAuth = null;

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            
            if(userAuth){
                   const userRef = await createUserProfileDocment(userAuth);

                   userRef.onSnapshot(snapShot => {

              
                       this.setState({
                           currentUser:{
                               id: snapShot.id,
                               ...snapShot.data()
                           }
                       });
                       console.log(this.state);
                   });
            }

            this.setState({ currentUser: userAuth });
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render() {
   
        return (
            <div>
                <Router>
                    <Header currentUser={this.state.currentUser}/>
                    <Switch>
                            <Route path="/" exact component={Card} />
                            <Route path="/Profile/:id" exact component={UserProfile}  />
                            <Route path="/SignUp" exact component={SignInSignUp} />
                    </Switch>
                </Router>
            </div>
        );
    }
}