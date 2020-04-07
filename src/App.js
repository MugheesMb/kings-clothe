import React from 'react';
import Home from './homepage/Home';
import Shop from './components/shop';
import Header from './components/header';
import {createStructuredSelector} from 'reselect';
import  CheckOutPage from './checkout/checkoutpage';
import SignInUppage from './components/signInorSignuP';
import {connect} from 'react-redux';
import { Switch, Route , Redirect } from 'react-router-dom';
import './App.css';
import {setCurrentUser} from './redux/user.action';
import { selectCurrentUser } from './redux/user.selectors';
import {auth ,createUserProfileDocument } from './firebase/fire-base';
import Foter  from './foter/foter';
import collection from './components/collection';



class App extends React.Component {
  
  unsubscribeFromAuth=null;

  componentDidMount(){
  
    const {setCurrentUser  } = this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth =>{ 
      if(userAuth){
        const userRef =await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
            
        })
      

      
    });
  }

  setCurrentUser(userAuth );
  
});
}

componentWillUnmount() {
this.unsubscribeFromAuth();
}

  





  render(){
  return (
    <div >
      <Header  />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={CheckOutPage} />

        <Route exact path='/signin' render={()=> this.props.currentUser ?(<Redirect to='/'/>) :(<SignInUppage/>) } />

      </Switch>

    </div>
  );
  }
}

const mapStateToProps =createStructuredSelector({
currentUser : selectCurrentUser,

});

const mapDispatchToProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
