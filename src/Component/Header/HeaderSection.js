import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

const Header = ({currentUser, hidden}) => (
    <div className="header">
            <Link to="/">
            <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/">
                    CONTACT
                </Link>
                {currentUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className="option" to="/SignUp">SIGN IN</Link>)}
                <CartIcon/>
            </div>
            { hidden ? null :  <CartDropDown/> }
              
    </div>
)

                       /*{       destructor method           }*/
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);