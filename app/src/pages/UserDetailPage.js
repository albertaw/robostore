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
			}))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<App>
				<div class="bg page-header yellow-bg">
					<div class="container">
						<h1>{this.state.user.name}</h1>
					</div>
				</div>
				<div class="section">
					<div class="container">
						<ItemList items={this.state.userItems} />
					</div>
				</div>
			</App>
		)
	}
}

export default UserDetailPage;