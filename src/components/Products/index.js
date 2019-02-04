import React from 'react';
import {Grid} from '@material-ui/core';
import {Link,withRouter} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import computers from '../../resources/Products/computers.jpg';

const styles = theme => ({
	Products:{
		padding: "0 20px",
		marginTop:"20px"
	},
	categories:{
		border:'1px solid #333'
	},
	imgresContainer:{

	},
	imgres:{
		width: "200px"
	}
});


const ProductsComponent=(props)=>{
	const {classes,location}=props;
	return (
		<div className={classes.Products}>
			<Grid container spacing={16}>
			<Grid item lg={3} className={classes.categories}>Filter</Grid>
			<Grid item lg={9}>
						<Link to={`${location.pathname}/12345`}>
						<div className={classes.imgresContainer}>
							<img src={computers} alt="computers" className={classes.imgres}/>
						</div>
						<div className='productDetail'>
						<p >
						Apple - MacBook Air - 13.3" Retina Display - Intel Core i5 - 8GB Memory - 
						128GB Flash Storage (Latest Model) - Gold
						</p>
						<p>price :- $1,199.99</p>
						</div>
						</Link>
			</Grid>
			</Grid>
		</div>	
		)
}

export default withStyles(styles)(withRouter(ProductsComponent));