import React from 'react';
import {Grid} from '@material-ui/core';
import {Link,withRouter} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import computers from '../../resources/Products/computers.jpg';
import mobiles from '../../resources/Products/mobiles.jpg';
import hardDisk from '../../resources/Products/harddisk.jpg';

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


const CategoryComponent=(props)=>{
	const {classes,location}=props;
	return (
		<div className={classes.Products}>
			<Grid container spacing={16}>
			<Grid item lg={3} className={classes.categories}>Categories</Grid>
			<Grid item lg={9}>
				<Grid container >
						<Grid lg={4} item> 
						<Link to={`${location.pathname}/computers`} className='productContainer'>
						<div className={classes.imgresContainer}>
							<img src={computers} alt="computers" className={classes.imgres}/>
						</div>
						<p style={{textAlign:'center'}}>Computers</p>
						</Link>
						</Grid>
						<Grid lg={4} item> 
							<div className={classes.imgresContainer}>
							<img src={mobiles} alt="mobiles" className={classes.imgres}/>
						</div>
						<p style={{textAlign:'center'}}>mobiles</p>
						</Grid>
						<Grid lg={4} item> 
							<div className={classes.imgresContainer}>
							<img src={hardDisk} alt="hard disk" className={classes.imgres}/>
						</div>
						<p style={{textAlign:'center'}}>hardDisk</p>
						</Grid>
				</Grid>
			</Grid>
			</Grid>
		</div>	
		)
}

export default withStyles(styles)(withRouter(CategoryComponent));