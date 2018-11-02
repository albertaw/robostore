import React, { Component } from 'react';

function UserList(props) {
	let userItems = props.users.map((user) =>
		<li>{user.name}</li>
	);

	return (
		<ul>{userItems}</ul>
	)
}

export default UserList;