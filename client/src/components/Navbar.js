import React, {useState} from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: "flex",
//   },
//  logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

//changing page
/* <nav style={styles.nav}>
                <a className="navbar-brand" href="#about" onClick={() => changePage('About')} style={page === 'About' ? styles.selected : styles.default}>About</a>
                <a className="navbar-brand" href="#work" onClick={() => changePage('Work')} style={page === 'Work' ? styles.selected : styles.default}>Work Samples</a>
                <a className="navbar-brand" href="#resume" onClick={() => changePage('Resume')} style={page === 'Resume' ? styles.selected : styles.default}>Resume</a>
                <a className="navbar-brand" href="#contact" onClick={() => changePage('Contact')} style={page === 'Contact' ? styles.selected : styles.default}>Contact</a>
        </nav> */

        function Navbar() {
            return (
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      News
                    </Typography>
                    <Button color="inherit">Login</Button>
                  </Toolbar>
                </AppBar>
              </Box>
            );
          }






// function Navbars({ page, changePage}) {
//   const classes = useStyles();
//   //to change page to about --> onClick={() => changePage('About')}

//   return (

//     <AppBar position="static">
//       {/* <CssBaseline /> */}
//       <Toolbar>
//         <Typography variant="h4" className={classes.logo}>
//           Navbar
//         </Typography>
//           <div className={classes.navlinks}>
//             <p onClick={() => changePage('Home')}> Home</p>
//             <p onClick={() => changePage('Games')}> Games </p>
//           </div>
//       </Toolbar>
//     </AppBar>
//   );
// }
export default Navbar;