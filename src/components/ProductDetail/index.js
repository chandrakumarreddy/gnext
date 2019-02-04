import React from 'react';
import {Grid,Button} from '@material-ui/core'
import computers from '../../resources/Products/computers.jpg';
import './index.css';

export default (props)=>{
	return(
<div className="productDetailComponent">
<Grid container>
<Grid lg={6} xs={12} item>
<img src={computers} alt="computers" width='100%'/>
</Grid>
<Grid lg={6} xs={12} item>
<p >
						Apple - MacBook Air - 13.3" Retina Display - Intel Core i5 - 8GB Memory - 
						128GB Flash Storage (Latest Model) - Gold
						</p>
						<p>price :- $1,199.99</p>
						<Button variant="contained" color="secondary">Add to cart</Button>
</Grid>
</Grid>
</div>
		)
}