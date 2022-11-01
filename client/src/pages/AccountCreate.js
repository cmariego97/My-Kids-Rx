import React, {useState} from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PROVIDERS } from '../utils/queries';
//import mutation to create new acct
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
import MenuItem from '@mui/material/MenuItem';

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

function AccountCreate({changePage}) {
  //finds all providers
  const {loading, data} = useQuery(QUERY_PROVIDERS);
  //state variables for create acct input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [provider, setProvider] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConf] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
  const [checkPass, setCheckPass] = useState('');
  //mutation to add new user
  const [addProfile, { error }] = useMutation(ADD_USER);
  //sets value of state variable that corresponds to input field that was edited
  const handleChange = (event) => {
    const { id, value} = event.target;
    if (id === 'user-firstName') {
      setFirstName(value);
    }
    else if (id === 'user-lastName') {
      setLastName(value);
    }
    else if (value === 'Female' || value === 'Male' || value === 'Other') {
      setGender(value);
    }
    else if (id === 'recipient-password') {
      setPassword(value);
      //checks length of password
      if (password.length < 8) {
        setCheckPass('Password must be at least 8 characters!')
      }
      else {
        setCheckPass('');
      }
    }
    else if (id === 'recipient-user') {
      setEmail(value);
      //checks email format
      if (!email.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/)) {
        setCheckEmail('Invalid email format!')
    } else {
      setCheckEmail('');
    }
    }
    else if (id === 'conf-password') {
      setConf(value);
    }
    else {
      setProvider(value);
    }
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(gender, provider);
    //checks to make sure all input fields were filled out
    if (!firstName || !lastName || !gender || !provider || !email || !password || !confPassword) {
      document.querySelector('#err-message').textContent = 'Please fill out all required fields!';
    }
    //checks to make sure passwords match
    if(password !== confPassword) {
      document.querySelector('#err-message').textContent = 'Error creating account: passwords must match';
    }
    //creates new user and logs them in
    else{
      try {
      const { data } = await addProfile({
        variables: { firstName, lastName, gender, provider, email, password },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      document.querySelector('#err-message').textContent = 'Error creating account, this email address may already have an account';
    }
    }
  };

  const classes = useStyles();
  const btnstyle={margin:'8px 0'}
  
  if(loading) {
    //if still loading data from query
    return (
      <h1>Loading...</h1>
    )
  }
  else {
    //when done loading data from query
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
                      helperText="first name required"
                      onChange={handleChange}
                    />
                    <CssTextField
                      required
                      id="user-lastName"
                      label="Last Name"
                      placeholder="(´ε｀ )♡"
                      margin="normal"
                      helperText="last name required"
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className={classes.textFieldColumn}>
                  <CssTextField
                    fullWidth
                    select
                    required
                    id='gender'
                    label='Gender'
                    margin='normal'
                    helperText='gender required'
                    onChange={handleChange}
                  >
                    <MenuItem value='Female'>Female</MenuItem>
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
                  </CssTextField>
                  <CssTextField
                      fullWidth
                      select
                      required
                      id="recipient-provider"
                      label="Provider"
                      placeholder="♫꒰･‿･๑꒱"
                      margin="normal"
                      helperText="provider required"
                      onChange={handleChange}
                    >
                      {data.providers.map((provider) => (
                        <MenuItem value={`${provider.firstName} ${provider.lastName} ${provider.suffix}`} >{`${provider.firstName} ${provider.lastName} ${provider.suffix}`}</MenuItem>
                      ))}
                    </CssTextField>
  
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
                    <p >
                        {checkEmail}
                    </p>
  
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

                      <p >
                        {checkPass}
                    </p>
  
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
                    Already have an Account? 
                    {/* DO NOT add href attribute it will not work correctly, but can change the element type if you want */}
                    <Link onClick={() =>changePage('Login')}>
                     {` Login`} 
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
}

export default AccountCreate;