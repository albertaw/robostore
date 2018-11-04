import React from 'react';
import { Link } from 'react-router-dom';

function UserDetail(props) {
	const path = '/users/' + props.id;
	
	return (
		<li>
			<Link to={path}>{props.name}</Link>
		</li>
	)
}

export default UserDetail;