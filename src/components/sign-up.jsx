import React from 'react';

import SignInput from './sign-Input';
import Buton from './buton';
import { auth , createUserProfileDocument  } from '../firebase/fire-base';

import './sign-up.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
    
      handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };


    render(){
        const{displayName,email,password,confirmPassword}=this.state;
        return(
           

<div className='sign-up'>

<h2 className='title'>I do not have a account</h2>
<span>Sign up with your email and password</span>

<form  className='sign-up-form' onSubmit={this.handleSubmit}>

<SignInput
type="text" name="displayName"
onChange={this.handleChange}
label='Display Name'  
value={displayName} required />

<SignInput
type="email" name="email"
onChange={this.handleChange}
label='Email'  
value={email} required />

<SignInput
type="password" name="password"
value={password}
onChange={this.handleChange}
label='Password'
required />

<SignInput
type="password" name="confirmPassword"
value={confirmPassword}
onChange={this.handleChange}
label='Confirm Password'
required />
<Buton type='submit' > SIGN UP  </Buton>
</form>
            </div>
        )
    }
}

export default SignUp;