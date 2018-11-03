import React from 'react';

function ItemDetail(props) {
	return (
		<li>
			<h3>{props.name}</h3>
			<img src={props.url} alt={props.name} />
		</li>
	)
}

export default ItemDetail;