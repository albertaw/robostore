import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function UserList(props) {
	let userItems = props.users.map(function(user){
		let name = user.name.replace(/\s/g, '');
		const path = 'users/' + name;
		return (
			<li>
				<Link to={path}>{user.name}</Link>
			</li>
		)
	});

	return (
		<ul>{userItems}</ul>
	)
}

export default UserList;