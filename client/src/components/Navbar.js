import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

//changing page
/* <nav style={styles.nav}>
                <a className="navbar-brand" href="#about" onClick={() => changePage('About')} style={page === 'About' ? styles.selected : styles.default}>About</a>
                <a className="navbar-brand" href="#work" onClick={() => changePage('Work')} style={page === 'Work' ? styles.selected : styles.default}>Work Samples</a>
                <a className="navbar-brand" href="#resume" onClick={() => changePage('Resume')} style={page === 'Resume' ? styles.selected : styles.default}>Resume</a>
                <a className="navbar-brand" href="#contact" onClick={() => changePage('Contact')} style={page === 'Contact' ? styles.selected : styles.default}>Contact</a>
        </nav> */

function Navbar({ page, changePage}) {
  const classes = useStyles();
  //to change page to about --> onClick={() => changePage('About')}

  return (

    <AppBar position="static">
      {/* <CssBaseline /> */}
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
          <div className={classes.navlinks}>
            <p onClick={() => changePage('Home')}> Home</p>
            <p onClick={() => changePage('Games')}> Games </p>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;