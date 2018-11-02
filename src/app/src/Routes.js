import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';

function Routes() {
	return (
		<Router>
			<div>
				<Route exact path='/' component={UserListPage} />
				<Route path='/users/:id' component={UserDetailPage} />
			</div>
		</Router>
	)
}

export default Routes;