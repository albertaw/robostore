import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import ItemList from '../components/item/ItemList';

export default class ItemListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:4000/api/items')
		.then(response => this.setState({items: response.data}));
	}

	render() {
		return (
			<App>
				<div class="bg page-header yellow-bg">
					<div class="container">
						<h1>Items</h1>
					</div>
				</div>
				<div class="section">
					<div class="container">
						<ItemList items={this.state.items} />
					</div>
				</div>
			</App>
		)
	}
}
