import React from 'react';
import { connect } from 'react-redux';
import {LocationPopup} from "../../actions/showLocation";
import HomeComponent from '../../components/Home';


export class HomeContainer extends React.Component {
	
	render() {
		return (
			<div><HomeComponent {...this.props}/></div>
		);
	}
}

export default connect(
	null,
	dispatch=> ({showLocationModel(display){dispatch(LocationPopup(display))}})
)(HomeContainer)
