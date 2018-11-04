import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import UserList from '../components/user/UserList';

export default class UserListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		}
	}

	componentDidMount() {
		axios.get('http://localhost:4000/api/users')
		.then(response => this.setState({users: response.data}));
	}

	render() {
		return (
			<App>
				<div class="bg page-header yellow-bg">
					<div class="container">
						<h1>Games</h1>
						<UserList users={this.state.users} />
					</div>
				</div>
			</App>
			
		)
	}
}