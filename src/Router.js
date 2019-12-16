import React from 'react';
import { Route, BrowserRouter as Router,Switch, Redirect } from 'react-router-dom';

import UserProfile from './Component/Profile/UserProfile';
import Header from './Component/Header/HeaderSection';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './Component/Sign-in-Sign_up/Sign-in-Sign-up-component';
import { auth, createUserProfileDocment } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';



class Routes extends React.Component {
  

    unsubscribeFromAuth = null;

    componentDidMount(){
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            
            if(userAuth){
                   const userRef = await createUserProfileDocment(userAuth);

                   userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                               id: snapShot.id,
                               ...snapShot.data()
                           });
                   });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render() {
   
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path='/shop' exact component={ShopPage}/>
                            <Route path="/Profile/:id" exact component={UserProfile}  />
                            <Route path="/SignUp" exact render={() => this.props.currentUser ? ( <Redirect to='/'/> ) : (<SignInSignUp/>)}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
     setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Routes)