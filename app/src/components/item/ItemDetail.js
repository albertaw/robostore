import React from 'react';
import { Link } from 'react-router-dom';

function ItemDetail(props) {
	let path = '/items/' + props.id; 
	
	return (
		<li>
			<Link to={path}><h3>{props.name}</h3></Link>
			<img src={props.src} alt={props.name} />
		</li>
	)
}

export default ItemDetail;