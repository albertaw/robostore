import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header class="menu menu-horizontal menu-top light-theme transparent">
			<div class="container">
	      <ul class="nav-left">
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/items">Items</Link></li>
	      </ul>
	     </div>
    </header>
	)
}

export default Header;