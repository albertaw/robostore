import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import UserList from '../components/user/UserList';

class ItemDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sellers: [],
			item: {}
		}
	}

	componentDidMount() {
		const sellersPath = 'http://localhost:4000/api/items/' + this.props.match.params.id + '/users';
		const itemPath = 'http://localhost:4000/api/items/' + this.props.match.params.id;
		
		axios.all([
			axios.get(sellersPath),
			axios.get(itemPath)
		])
			.then(axios.spread((sellers, item) => {
				//must be set in the order listed in state object
				this.setState({sellers: sellers.data});
				this.setState({item: item.data});
				console.log(this.state);
			}))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<App>
				<div class="bg page-header yellow-bg">
					<div class="container">
						<h1>Buy now</h1>
					</div>
				</div>
				<div class="section">
					<div class="container">
						<h2>{this.state.item.name}</h2>
						<img class="item" src={this.state.item.url} alt={this.state.item.name} />
						<h2>Other buying options</h2>
						<UserList users={this.state.sellers} />
					</div>
				</div>
			</App>
		)
	}
}

export default ItemDetailPage;