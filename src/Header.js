import React from 'react' 
import './Header.css';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <nav className="header">
        <Link to="/login">
          
          <img className="header__logo" src="https://images.app.goo.gl/SeNX5syzBiNE7ufv5" alt="amazonlogo"/>
        </Link>
        <div className="header__search">
        <input type="text" placeholder="search" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
        </div>
        <div className="header__nav">
           <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">hello</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
            
           </Link>
           
           <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">returns </span>
              <span className="header__optionLineTwo">&orders</span>
            </div>
            
           </Link>

           <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
            
           </Link>
           <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">0</span>
              </div>
           </Link>
        </div>
         </nav>
    );
}

export default Header