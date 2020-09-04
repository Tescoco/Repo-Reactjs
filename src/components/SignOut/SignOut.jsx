/**
 * name
 * username
 * email
 * they haveto verify email before they can post
 * password 
 * location they want
 */



import React from 'react';
import{ Popover,Button} from '@material-ui/core';
import SignOutField from "./SignOutField";



 function SignUp() {
 const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  
  return (
    <div>
      <Button aria-describedby={id} style={{backgroundColor:"#151e29"}} variant="contained" color="primary" onClick={handleClick}>
    Sign Out
      </Button>
      <Popover
               id={id}
               open={open}
               anchorEl={anchorEl}
               onClose={handleClose}
               anchorReference="anchorPosition"
        anchorPosition={{ top: 70, left: 1320 }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <SignOutField />
       </Popover>
    </div>
  );
}

export default SignUp
