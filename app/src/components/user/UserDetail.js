import React from 'react';
import { Link } from 'react-router-dom';

function UserDetail(props) {
	const name = props.name.replace(/\s/g, '');
	const path = 'users/' + name;
	return (
		<li>
			<Link to={path}>{props.name}</Link>
		</li>
	)
}

export default UserDetail;