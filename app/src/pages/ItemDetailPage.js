import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import UserList from '../components/user/UserList';

class ItemDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sellers: []
		}
	}

	componentDidMount() {
		const path = 'http://localhost:4000/api/items/' + this.props.match.params.id + '/users';

		axios.get(path)
			.then(response => this.setState({sellers: response.data}));
			console.log(this.props.match.params.id)
	}

	render() {
		return (
			<App>
				<h2>I am the item {this.props.match.params.id} page</h2>
				<h3>Sellers</h3>
				<UserList users={this.state.sellers} />
			</App>
		)
	}
}

export default ItemDetailPage;