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
		axios.get('http://localhost:4000/users')
		.then(response => this.setState({users: response.data}));
	}

	render() {
		return (
			<App>
				<h1>This is the user list page</h1>
				<UserList users={this.state.users} />
			</App>
		)
	}
}