import React from "react";
import Promotions from "../Promotions";
import Header from '../Header';
import Navigation from '../Navigation';
import HeroContentBlock from "../HeroContentBlock";

const HomeComponent = props => {
	return (
		<div>
			<Promotions {...props}/>
			<Header/>
			<Navigation/>
			<div className="container-fluid row">
			<div className=" col-lg-12">
					<HeroContentBlock />
			</div>
			</div>
		</div>
	);
};

export default HomeComponent;
