import React from 'react';
import SignInput from './sign-Input';
import './signIn.scss';
import Buton from './buton';
import {auth,signInWithGoogle} from '../firebase/fire-base';

class SignIn extends React.Component{

    state={
            email: '',
            password: ''
        }
    

handleSubmit = async event => {
    event.preventDefault();
    
    const {email, password} =this.state; 
    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'' ,password:''});
    }  catch(error){
        console.log(error);
    }

    
} ;

handleChange =event =>{
    const {value,name} =event.target;
    this.setState({[name]:value})
}

render(){
return(

    <div className='signIn'>

             <h2 className='title'>I already have account</h2>
             <span>Sign In with your email and password</span>

             <form onSubmit={this.handleSubmit}>
          
             <SignInput
             type="email" name="email"
             handleChange={this.handleChange}
             label='Email'  
             value={this.state.email} required />
    
    <SignInput
     type="password" name="password"
      value={this.state.password}
      handleChange={this.handleChange}
      label='Password'
       required />
 

<div class='butonn'>
          <Buton type='submit' > SIGN IN  </Buton>
          <Buton  onClick={signInWithGoogle}  isGoogleSignIn >
       {' '}
              Sign In with Google {' '}
                </Buton>

</div>

             </form>


    </div>

);

}
}
export default SignIn;