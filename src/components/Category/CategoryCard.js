import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  imageStyle:{
      width:'100%',
      height:'150px'
  },
  text:{
    textAlign:'center',
    paddingTop:"5px"
  }
};

function CategoryCard(props) {
  const { classes,product } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
       <img src={product.image} alt={product.name} className={classes.imageStyle}/>
        <Typography component="h6" className={classes.text}>
        {product.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

CategoryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryCard);