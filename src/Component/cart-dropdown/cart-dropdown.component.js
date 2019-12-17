import React from 'react';
import CustomButton from '../custom-button/custom-button-comp';
import './cart-dropdown.style.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart-action';

import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';




const CartDropDown = ({cartItems, history, dispatch,...otherProps}) => {
    /*console.log(otherProps);*/
    return(
    <div className='cart-dropdown' >
        <div className='cart-items'>
            {cartItems.length ?
            (cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            /* Redux Trigger */
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});




export default withRouter(connect(mapStateToProps)(CartDropDown));