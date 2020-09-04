  
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';


export const styles = (theme) => ({
  root: {
    height: 64,
    backgroundColor:'#0c0f14',
 [theme.breakpoints.up('sm')]: {
      height: 70,
    },
  },
});

export default withStyles(styles)(Toolbar);