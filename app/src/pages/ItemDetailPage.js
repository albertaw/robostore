import React from 'react';
import App from '../App';

function ItemDetailPage({match}) {
	return (
		<App>
			<h1>I am the item {match.params.id} page</h1>
		</App>
	)
}

export default ItemDetailPage;