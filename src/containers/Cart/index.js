import React from 'react';
import { connect } from 'react-redux';
import CartComponent from '../../components/Cart';


export class CartContainer extends React.Component {
	
	render() {
		return (
			<div><CartComponent/></div>
		);
	}
}

export default connect(
	null
)(CartContainer)
