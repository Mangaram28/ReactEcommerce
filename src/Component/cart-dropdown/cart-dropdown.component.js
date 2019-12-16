import React from 'react';
import CustomButton from '../custom-button/custom-button-comp';
import './cart-dropdown.style.scss';
//import {connect} from 'react-redux';



const CartDropDown = () => (
    <div className='cart-dropdown' >
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
   </div>
);




export default CartDropDown;