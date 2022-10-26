import React from 'react'

// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//import images
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
import HeartPtLogin from '../assets/images/site-design-images/HeartPtLogin.gif';

//import components
import HeaderAppBar from '../components/HeaderAppBar';

/* website theme palette hex codes:
    • light shades - snowdrift: #FAFBF9
        --Use this color as the background for your dark-on-light designs, or the text color of an inverted design
    • light accent - gull gray: #9CA6B5
        --Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.
    • main brand color / primary - sunglo: #DE7171
        --This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.
    • dark accent - santa fe: #B5765C
        --Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.
    • dark shades / info - fiord: #3F4868
        --Use as the text color for dark-on-light designs, or as the background for inverted designs.
    • success - asparagus: #67a35b
    • warning - carrot-orange: #f58c22
    • danger - pomegranate: #f44336
    • kidsrxblue: #f4f6fc;
    • kidsrxgreen: #F5FCFF;
    
-- collapse this to hide -claire <3 --*/

const theme = createTheme({
  palette: {
      primary: {
      // Sunglo
        main: "#de7171",
      },
      secondary: {
      // sandrift
        main: "#a68674",
      },
      error: {
      // pomegranate
        main: "#f44336",
      },
      warning: {
      // carrot-orange
        main: "#f58c22"
      },
      info: {
      // fiord
        main: "#3f4868"
      },
      success: {
      // asparagus
        main: "#67a35b"
      },
      neutral: {
      // gull gray
        main: "#9CA6B5"
      }
  },
  typography: {
      fontFamily: [
          'Nunito', 'sans-serif', 'Nunito Sans', 'Atma', 'cursive', 'Londrina Solid'
      ],
      h4: {
          fontWeight: 600,
          fontSize: 28,
          lineHeight: '2rem',
      },
      h5: {
          fontWeight: 100,
          lineHeight: '2rem',
      },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  wrapper: {
    width: "65%",
    margin: "auto",
    padding: "1rem",
    minHeight: "70vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "24px",
    boxShadow: "0px 1px 3px rgba(44, 42, 72, 0.9)",
    backgroundColor: "#f4f6fc" 
    // add media query @780px
  },
  containerLogin: {
    margin: "auto",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
  }
}))

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#de7171',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#a68674',
    },
    '&:hover fieldset': {
      borderColor: '#f58c22',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#de7171',
    },
  },
});

function AccountLoginPatient() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <HeaderAppBar />

        <div className={classes.wrapper} class="login-content-container relative flex flex-wrap flex-row justify-evenly items-center rounded-2xl m-5 p-3">
          {/* <!-- left-side: image --> */}
          <div class="left-image m-1 w-1/4">
            <img src={`${HeartPtLogin}`} />
          </div>
          {/* <!-- right-side: login --> */}
          <div className={classes.containerLogin} class="right-login m-1 w-1/2">
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >
              <div>
                <CssTextField
                  fullWidth
                  required
                  id="recipient-user"
                  label="E-mail or Username"
                  placeholder="♫꒰･‿･๑꒱"
                  margin="normal"
                  helperText="e-mail required"
                />
                <CssTextField
                  fullWidth
                  required
                  id="recipient-password"
                  label="Password"
                  placeholder="ᕙ(‾̀◡‾́)ᕗ"
                  margin="normal"
                  helperText="password required"
                />
                <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
              </div>
            </Box>
            <div class="btn-container flex justify-evenly">
              <button type="button" id="login-btn" class="btn m-2 px-10">
                Login
              </button>
              <button type="button" id="create-accnt-btn" class="btn m-2 px-10">
                <a href="/createacc">Create Account</a>
              </button>
            </div>
            {/* <!-- displays message from JS --> */}
            <p id="err-message"></p>
          </div>
        </div>

        
      </div>
    </ThemeProvider>
  )
}

export default AccountLoginPatient