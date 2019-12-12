import React from 'react';

import FormInput from '../form-input/form-input-comp';
import CustomButton from '../custom-button/custom-button-comp';

import {auth, createUserProfileDocment} from '../../firebase/firebase.utils';


import './sign-up-style.scss';
import { create } from 'domain';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit =async e => {
        e.preventDefault();

        const { displayName,email,password,confirmPassword } = this.state;

        if(password != confirmPassword){
            alert("Password don't match");
            return;
        }

        try{
           const {user} = await auth.createUserWithEmailAndPassword(
               email,
               password
           );

          await createUserProfileDocment(user, {displayName});

          this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
          });

        }catch(error){
                console.error(error);
        }

    }

    handleChange = (e) => {
          const {name,value} = e.target;

          this.setState({
              [name] : value
          })
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                     <FormInput 
                         type='text'
                         name='displayName'
                         value={displayName}
                         onChange={this.handleChange}
                         label='name'
                     ></FormInput>
                     <FormInput 
                         type='text'
                         name='email'
                         value={email}
                         onChange={this.handleChange}
                         label='email'
                     ></FormInput>
                     <FormInput 
                         type='password'
                         name='password'
                         value={password}
                         onChange={this.handleChange}
                         label='password'
                     ></FormInput>
                     <FormInput 
                         type='password'
                         name='confirmPassword'
                         value={confirmPassword}
                         onChange={this.handleChange}
                         label='Confirm Password'
                     ></FormInput>
                     <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
           
        )
    }
}

export default SignUp;
