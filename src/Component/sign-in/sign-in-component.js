import React from 'react';
import FormInput from '../form-input/form-input-comp';
import './sign-in-component.scss';
import CustomButton from '../custom-button/custom-button-comp';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = ev => {
        ev.preventDefault();
        console.log('ok');
        this.setState({email:'',password:''});
    };

    handleChange = event => {
       const {name,value} = event.target;

       this.setState({ [name] : value })
    }

    render(){
        return(
          
            <div className="sign-in">
                <h2 className="title">Sign in with your email and password</h2>
               
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput
                        type="text" 
                        name="email" 
                        label="Email"
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                    />
                    <FormInput type="Password" name="password" label="Password" value={this.state.password} handleChange={this.handleChange} />

                    <div class='buttons'>
                            <CustomButton onClick={this.handleSubmit}>SIGN IN</CustomButton>
                            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
          
            </div>
           
        )
    }

}

export default SignIn;