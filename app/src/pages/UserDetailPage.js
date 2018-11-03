import React from 'react';
import App from '../App';

function UserDetailPage({match}) {
	return (
		<App>
			<h1>I am the user {match.params.id} page</h1>
		</App>
	)
}

export default UserDetailPage;