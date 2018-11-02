import React from 'react';
import App from '../App';

function UserDetailPage({match}) {
	return (
		<App>
			<h1>I am the user detail page</h1>
			<p>This is user {match.params.id}</p>
		</App>
	)
}

export default UserDetailPage;