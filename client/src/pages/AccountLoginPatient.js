import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

// import MUI styles
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography, Link, Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//import images
import background from '../assets/images/site-design-images/plain-animal-bg.svg';
import HeartPtLogin from '../assets/images/site-design-images/HeartPtLogin.gif';

//import components
import HeaderAppBar from '../components/HeaderAppBar';

const useStyles = makeStyles((theme) => ({
  //new
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  wrapper: {
    margin: "0 auto",
    height: "60%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: "24px",
    boxShadow: "0px 1px 3px rgba(44, 42, 72, 0.9)",
    backgroundColor: "#f4f6fc",
    marginTop: '30px'
    //TODO: add media query @780px
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
    width: "50%",
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

function AccountLoginPatient({changePage}) {
  //state variables corresponding to input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //login mutation
  const [login, { error, data }] = useMutation(LOGIN_USER);
  //sets value of state variable corresponding to input field that was edited
  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === 'recipient-user') {
      setEmail(value);
    }
    else {
      setPassword(value);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //check to make sure all input fields are filled out
    if(!email || !password) {
      document.querySelector('#err-message').textContent = 'Please fill out all required fields!';
    }
    else {
      //logs in user
      try {
        const { data } = await login({
          variables: { email, password },
        });
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
        document.querySelector('#err-message').textContent = 'Unable to log in, please check your email and password';
      }
    }
  };

  const classes = useStyles();
  const btnstyle={margin:'8px 0'}

  return (
    <Box className={classes.root}>
      {/* <HeaderAppBar className="appBarPage"/> */}
      
      <Box className={classes.wrapper}>
        <Box className={classes.container}>
          {/* <!-- left-side: image --> */}
          <Box className={classes.containerImage}>
            <img src={`${HeartPtLogin}`} />
          </Box>

          {/* <!-- right-side: login --> */}
          <Box className={classes.containerLogin}>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >
              <Box>
                <CssTextField
                  fullWidth
                  required
                  id="recipient-user"
                  label="E-mail or Username"
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
              </Box>

              <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Remember me"/>

              <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleFormSubmit}>
                Sign in
              </Button>
              <p id='err-message' style={{fontSize: '110%'}}></p>
              <Typography> 
                Don't have an Account? 
                {/* DO NOT add href attribute it will not work correctly, but can change the element type if you want */}
                <Link onClick={() => changePage('Create')}>
                 {` Sign Up`} 
                </Link>
              </Typography>

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AccountLoginPatient