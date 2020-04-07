import React from 'react';
import './cart.dropdown.scss';
import  Buton from '../components/buton';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart.item/cart.item';
import {selectCartItems}  from '../redux/cart.selectors';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../redux/cart.action';

const Dropdown = ({cartItems ,history , dispatch})=> (

    <div className='cart-dropdown'>
        <div className='cart-items'>
            
               { cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                        ) )
               ): (
                        <span className='empty-message'> YOUR CART IS EMPTY</span>
               )}
             </div>
        <Buton 
        onClick={() => {history.push('./checkout');
                              dispatch(toggleCartHidden());
    
        }} >GO TO CHECKOUT</Buton>

    </div>

);
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)( Dropdown));