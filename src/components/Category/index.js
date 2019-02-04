import React from 'react';
import {Grid} from '@material-ui/core';
import {Link,withRouter} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CategoryCard from './CategoryCard';
import computers from '../../resources/Products/computers.jpg';
import mobiles from '../../resources/Products/mobiles.jpg';
import hardDisk from '../../resources/Products/harddisk.jpg';

const styles = theme => ({
	Products:{
		padding: "0 20px",
		marginTop:"130px"
	},
	categories:{
		border:'1px solid #333'
	}
});


const CategoryComponent=(props)=>{
	const {classes,location}=props;
	return (
		<div className={classes.Products}>
			<Grid container spacing={16}>
			<Grid item lg={3} sm={3} className={classes.categories}>Categories</Grid>
			<Grid item lg={9} sm={9}>
				<Grid container spacing={8}>
						<Grid lg={4} sm={4} xs={12} item> 
						<Link to={`${location.pathname}/computers`} >
						<CategoryCard product={{image:computers, name:'Computers'}}/>
						</Link>
						</Grid>
						<Grid lg={4} sm={4} xs={12} item> 
						<Link to={`${location.pathname}/computers`} >
							<CategoryCard product={{image:mobiles, name:'Mobiles'}}/>
							</Link>
						</Grid>
						<Grid lg={4} sm={4} xs={12} item> 
						<Link to={`${location.pathname}/computers`} >
							<CategoryCard product={{image:hardDisk, name:'HardDisk'}}/>
							</Link>
						</Grid>
				</Grid>
			</Grid>
			</Grid>
		</div>	
		)
}

export default withStyles(styles)(withRouter(CategoryComponent));