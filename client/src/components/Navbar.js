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

function Navbar() {
  const classes = useStyles();
  const [page, changePage] = useState('Home');
  //to change page to about --> onClick={() => changePage('About')}

  return (

    <AppBar position="static">
      {/* <CssBaseline /> */}
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
          <div className={classes.navlinks}>
            {/* <Link className={classes.link}>
              Home
            </Link>
            <Link className={classes.link}>
              About
            </Link>
            <Link className={classes.link}>
              Contact
            </Link>
            <Link className={classes.link}>
              FAQ
            </Link> */}
            <p> Home</p>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;