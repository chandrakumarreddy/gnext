import React from 'react';
import {Grid} from '@material-ui/core';
import {Link,withRouter} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import computers from '../../resources/Products/computers.jpg';

const styles = theme => ({
	Products:{
		padding: "0 20px",
		marginTop:"130px"
	},
	categories:{
		border:'1px solid #333'
	},
	producttitle:{
		fontSize:'13px',
		color:'blue'
	},
	productIdName:{
		fontSize:'12px',
		color:'#000'
	},
    productid:{
    	fontSize:'11px',
    	color:'#333',
    	paddingLeft:'3px'
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
					<Grid container spacing={16}>
						<Grid item lg={3}><img src={computers} alt="computers" width='100%'/></Grid>
						<Grid item lg={6}>
							<p className={classes.producttitle}>Apple - MacBook Air - 13.3" Retina Display - Intel Core i5 - 8GB Memory - 
							128GB Flash Storage (Latest Model) - Gold</p>
							<p className={classes.productIdName}><strong>Model :</strong><span className={classes.productid}>SMJ737VZKV</span>
							 &nbsp;&nbsp;&nbsp;<strong>SKU :</strong><span className={classes.productid}>6251810</span></p>
							<p>Shipping: Unavailable for 96939</p>
							<p>Store Pickup: Available for pickup today at Aiea.</p>
							<p>Act Quick – Only 2 left at your store!</p>
							<p>Unfortunately, this item is only available for shipping in certain markets.</p>
						</Grid>
						<Grid item lg={3}>
							<p>price :- $1,199.99</p>
						</Grid>
					</Grid>
				</Link>
			</Grid>
			</Grid>
		</div>	
		)
}

export default withStyles(styles)(withRouter(ProductsComponent));