import React from 'react';
import { Link } from 'react-router-dom';

function ItemDetail(props) {
	let path = '/items/' + props.id; 
	
	return (
		<li class="row">
			<div class="col">
				<img src={props.src} alt={props.name} />
			</div>
			<div class="col-9">
				<Link to={path}><h3>{props.name}</h3></Link>
				<p>{props.cost}</p>
			</div>
		</li>
	)
}

export default ItemDetail;