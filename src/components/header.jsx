import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import crown from './crown.jpeg';
import {createStructuredSelector} from 'reselect';
import './header.scss';
import { auth } from '../firebase/fire-base';
import CartIcon from './cart.icon';
import Dropdown from '../cart/cart.dropdown';
import {selectCartHidden} from '../redux/cart.selectors';
import {selectCurrentUser} from '../redux/user.selectors';


const Header = ({currentUser,hidden}) => (

<div className='header'>
    
<Link  to='/' >
<img className='logo' src={crown}  alt='mugy' />
</Link>
<div className='options'>

<Link className='option  underline-hover f3 fr dim black   ' to='/shop'>SHOP</Link>
<Link className='option underline-hover f3 fr dim black   ' to='/checkout'>CONTACT</Link>
{

currentUser ? (
<div className='option  underline-hover f3 fr dim black ' onClick={()=> auth.signOut()}>
    SIGN OUT
    </div>
 ) :   (
<Link className='option underline-hover f3 fr dim black  ' to='/signin'>SIGN IN</Link>)   }

<CartIcon/> 

</div>
{hidden ? null:<Dropdown/>}
</div>
);
const mapStateToProps=createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);