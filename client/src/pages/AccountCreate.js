import React, {useState} from 'react'
//first query to check if user with input email already exists
// import { useQuery } from '@apollo/client';
// import { QUERY_PROFILE } from '@apollo/client';
//then mutation to create new acct
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
// import MUI styles
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography, Link, Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//import images
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
import HeartPtCreate from '../assets/images/site-design-images/HeartPtCreate.gif';

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
    margin: "0 auto",
    minHeight: "70vh",
    maxWidth: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: "24px",
    boxShadow: "0px 1px 3px rgba(44, 42, 72, 0.9)",
    backgroundColor: "#f4f6fc" 
    // add media query @780px
  },
  container: {
    margin: "100px"
  },
  containerImage: {
    margin: "4px",
  },
  containerLogin: {
    margin: "4px",
    padding: "4px",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  textFieldRow: {
    display: "flex",
    flexDirection: "row",
  },
  textFieldColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
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

function AccountCreate() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [provider, setProvider] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConf] = useState('');
  const [addProfile, { error, data }] = useMutation(ADD_USER);
  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'user-firstName') {
      setFirstName(value);
    }
    else if (id === 'user-lastName') {
      setLastName(value);
    }
    else if (id === 'recipient-provider') {
      setProvider(value);
    }
    else if (id === 'recipient-user') {
      setEmail(value);
    }
    else if (id === 'conf-password') {
      setConf(value);
    }
    else {
      setPassword(value);
    }
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !provider || !email || !password || !confPassword) {
      document.querySelector('#err-message').textContent = 'Please fill out all required fields!';
    }
    if(password !== confPassword) {
      document.querySelector('#err-message').textContent = 'Error creating account: passwords must match';
    }
    else{
      try {
      const { data } = await addProfile({
        variables: { firstName, lastName, provider, email, password },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    }
  };

  const classes = useStyles();
  const btnstyle={margin:'8px 0'}

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <HeaderAppBar />

        <div className={classes.wrapper}>
          <div className={classes.container}>
            {/* <!-- left-side: image --> */}
            <div className={classes.containerImage}>
              <img src={`${HeartPtCreate}`} />
            </div>

            {/* <!-- right-side: login --> */}
            <div className={classes.containerLogin}>
              <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >
                <div className={classes.textFieldRow}>
                <CssTextField
                    required
                    id="user-firstName"
                    label="First Name"
                    placeholder="(ゝз○`)"
                    margin="normal"
                    onChange={handleChange}
                  />
                  <CssTextField
                    required
                    id="user-lastName"
                    label="Last Name"
                    placeholder="(´ε｀ )♡"
                    margin="normal"
                    onChange={handleChange}
                  />
                </div>
                
                <div className={classes.textFieldColumn}>
                <CssTextField
                    fullWidth
                    required
                    id="recipient-provider"
                    label="Provider"
                    placeholder="♫꒰･‿･๑꒱"
                    margin="normal"
                    helperText="provider required"
                    onChange={handleChange}
                  />

                  <CssTextField
                    fullWidth
                    required
                    id="recipient-user"
                    label="E-mail"
                    placeholder="♫꒰･‿･๑꒱"
                    margin="normal"
                    helperText="e-mail required"
                    onChange={handleChange}
                  />

                  <CssTextField
                    fullWidth
                    required
                    id="recipient-password"
                    type="password"
                    label="Password"
                    placeholder="ᕙ(‾̀◡‾́)ᕗ"
                    margin="normal"
                    helperText="password required"
                    onChange={handleChange}
                  />

                  <CssTextField
                    fullWidth
                    required
                    id="conf-password"
                    type="password"
                    label="Confirm Password"
                    placeholder="ᕙ(‾̀◡‾́)ᕗ"
                    margin="normal"
                    helperText="confirm password required"
                    onChange={handleChange}
                  />
                </div>

                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Remember me"/>

                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleFormSubmit}>
                  Create Account
                </Button>
                <p id='err-message'></p>

                <Typography> 
                  {/* TODO: fix this */}
                  Already have an Account? 
                  <Link href="#" >
                    Login 
                  </Link>
                </Typography>

              </Box>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default AccountCreate