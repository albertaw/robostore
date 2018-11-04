import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import ItemList from '../components/item/ItemList';

class UserDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userItems: []
		}
	}

	componentDidMount() {
		const path = 'http://localhost:4000/api/users/' + this.props.match.params.id + '/items';

		axios.get(path)
			.then(response => this.setState({userItems: response.data}));
			console.log(this.props.match.params.id)
	}

	render() {
		return (
			<App>
				<h1>I am the user {this.props.match.params.id} page</h1>
				<ItemList items={this.state.userItems} />
			</App>
		)
	}
}

export default UserDetailPage;