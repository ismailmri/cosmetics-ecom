import React from "react"
import '../css/header.css'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grow from '@material-ui/core/Grow';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  menuButton: {
    color: '#fff',
  },
  title: {
    display: 'flex',
    padding: '2% 2%',
    fontSize: '13px',
  },
   container: {
    display: 'flex',
  },
}));


const Header = () => {

  const classes = useStyles();
  //var checked = false;
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  return (
    <nav className="navigation">
      <div className={classes.root}>
      <AppBar position="static" margintop="0">
        <Toolbar>
          <IconButton edge="start" style={{marginLeft: "10%"}} className={classes.menuButton} aria-label="menu" onClick={() => { handleChange() }}>
            <MenuIcon style={{color: "#e1c9b4"}} />
          </IconButton>
          <div className={classes.container}>
          <Grow in={checked}>
          <div className={classes.container}>
            <Button href="/"  className={classes.title}>
              Home
            </Button>
            <Button  href="/contact" className={classes.title}>
              Contact
            </Button>
    
            </div>
          </Grow>
          </div>
        </Toolbar>
        <div className="logo"><a href="/">Jumpstart</a></div>
          <Button href="/snipcart-checkout" className="snipcart-checkout" />     
        </AppBar>
    </div>
    </nav>
  )
}

export default Header