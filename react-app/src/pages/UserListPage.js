import React, { Component } from 'react';
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
		fetch('http://localhost:8080/api/users')
		.then(data => data.json())
		.then(response => this.setState({users: response}))
		.catch(error => console.error(error));
	}

	render() {
		return (
			<App>
				<div className="bg page-header yellow-bg">
					<div className="container">
						<h1>Games</h1>
						<UserList users={this.state.users} />
					</div>
				</div>
			</App>
			
		)
	}
}