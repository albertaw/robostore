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
				<h1>I am the item list page</h1>
				<ItemList items={this.state.items} />
			</App>
		)
	}
}
