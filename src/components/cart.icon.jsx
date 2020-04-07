import React from 'react';  
import {ReactComponent as  ShoppingIcon } from './shopping-bag.svg';
import './cart.icon.scss';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectCartItemsCount } from '../redux/cart.selectors';
import {toggleCartHidden} from '../redux/cart.action';

const CartIcon =({toggleCartHidden , itemCount}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon underline-hover f3 fr dim black'/>
<span className='item-count ' >{itemCount}</span>

    </div>
);


const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
    });

    const mapStateToProps = createStructuredSelector({
        itemCount: selectCartItemsCount
    });
    
    export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);