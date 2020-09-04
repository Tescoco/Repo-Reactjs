import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';
import SignUp from "../SignUp/SignUp";
import Styles from "../Index/Index.module.css";

const styles = (theme) => ({
  background: {
    backgroundColor: '#151e29', // Average color of the background image.
    backgroundPosition: 'center',
    
  
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Index(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout className={Styles.background} backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
       REPO
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Get Real Time information About Sars and Armed robbers in Your Area
       </Typography>
      <SignUp />
      <Typography variant="body2" color="inherit" className={classes.more}>
        Can't wait to see you on the other side
      </Typography>
    </ProductHeroLayout>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);