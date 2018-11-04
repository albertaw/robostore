import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import ItemList from '../components/item/ItemList';

class UserDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userItems: [],
			//must be initialized
			user: {}
		}
	}

	componentDidMount() {
		const itemPath = 'http://localhost:4000/api/users/' + this.props.match.params.id + '/items';
		const userPath = 'http://localhost:4000/api/users/' + this.props.match.params.id;
		axios.all([
			axios.get(itemPath),
			axios.get(userPath)
			])
			.then(axios.spread((items, user) => {
				this.setState({userItems: items.data});
				this.setState({user: user.data});
				console.log(this.state.user)
			}))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<App>
				<h2>{this.state.user.name}</h2>
				<ItemList items={this.state.userItems} />
			</App>
		)
	}
}

export default UserDetailPage;