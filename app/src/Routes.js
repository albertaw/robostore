import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';
import ItemListPage from './pages/ItemListPage';

function Routes() {
	return (
		<Router>
			<div>
				<Route exact path='/' component={UserListPage} />
				<Route path='/users/:id' component={UserDetailPage} />
				<Route path='/items' component={ItemListPage} />
			</div>
		</Router>
	)
}

export default Routes;