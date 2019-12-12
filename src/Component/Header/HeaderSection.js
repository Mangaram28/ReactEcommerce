import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
            <Link to="/">
            <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/">
                    USER
                </Link>
                <Link className="option" to="/">
                    CONTACT
                </Link>
                {currentUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className="option" to="/SignUp">SIGN IN</Link>)}

            </div>
                
            

    </div>
)


export default Header;