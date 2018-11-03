import React from 'react';
import { Link } from 'react-router-dom';
import UserDetail from './UserDetail';
function UserList(props) {
	let users = props.users.map((user) =>
		<UserDetail
			key={user.userId}
			name={user.name} />
	);

	return (
		<ul>{users}</ul>
	)
}

export default UserList;