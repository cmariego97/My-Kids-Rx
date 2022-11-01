import React, {useState} from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PROVIDERS } from '../utils/queries';

//import mutation to create new acct
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

// import MUI styles
import { styled } from '@mui/material/styles';
import { Avatar, Box, Button, FormControl, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// import components
import Footer from '../components/Footer';

// import images
import HeartPtCreate from '../assets/images/site-design-images/HeartPtCreate.gif';
import { style } from '@mui/system';

const CssFormControl = styled(FormControl)({
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
})

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
  //TODO: make sure this isn't needed - check with Rita
  // set gender
  // const [gender, setGender] = React.useState('');

  // const handleGender = (event) => {
  //   setGender(event.target.value);
  // };

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
  //mutation to add new user
  const [addProfile, { error }] = useMutation(ADD_USER);
  //sets value of state variable that corresponds to input field that was edited
  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'user-firstName') {
      setFirstName(value);
    }
    else if (id === 'user-lastName') {
      setLastName(value);
    }
    else if (id === 'gender') {
      setGender(event.target.value);
    }
    else if (id === 'recipient-provider') {
      setProvider(value);
    }
    else if (id === 'recipient-user') {
      setEmail(value);
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
      setPassword(value);
    }
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
        <Box className="wrap siteWrap">
          <Box className="loginWrap">
            <Box className="loginContainer">
              {/* <!-- left-side: image --> */}
              <Avatar variant="square" src={`${HeartPtCreate}`} sx={{ width: 300, height: 300 }} />
  
              {/* <!-- right-side: login --> */}
              <Box className="textFieldContainer">
                <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >

                  {/* Row - Name */}
                  <CssTextField
                    required
                    fullWidth
                    id="user-firstName"
                    label="First Name"
                    placeholder="(ゝз○`)"
                    margin="normal"
                    onChange={handleChange}
                  />
                  <CssTextField
                    required
                    fullWidth
                    id="user-lastName"
                    label="Last Name"
                    placeholder="(´ε｀ )♡"
                    margin="normal"
                    onChange={handleChange}
                  />

                  {/* Select Gender */}
                  <CssFormControl required fullWidth id="gender" margin="normal">
                    <InputLabel>Gender</InputLabel>
                    <Select
                      labelId="select-gender"
                      id="gender"
                      value={gender}
                      label="Gender"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                      <MenuItem value={30}>Other</MenuItem>
                    </Select>
                  </CssFormControl>

                  {/* Select Provider */}
                  <CssFormControl required fullWidth margin="normal">
                    <InputLabel>Provider</InputLabel>
                    <Select
                      id="provider"
                      label="provider"
                      placeholder="select provider"
                      onChange={handleChange}
                    >
                      {data.providers.map((provider) => (
                        <MenuItem>{`${provider.firstName} ${provider.lastName} - ${provider.suffix}`}</MenuItem>
                      ))}
                    </Select>
                  </CssFormControl>

                  <CssFormControl fullWidth>
                    <Select
                      id='gender'
                      onChange={handleChange}
                    >
                      <MenuItem selected>Select a gender</MenuItem>
                      <MenuItem>Female</MenuItem>
                      <MenuItem>Male</MenuItem>
                      <MenuItem>Other</MenuItem>
                    </Select>
                  </CssFormControl>
                  
                  {/* <Select
                    required
                    fullWidth
                    id="recipient-provider"
                    label="Provider"
                    placeholder="(´ε｀ )♡"
                    margin="normal"
                    onChange={handleChange}
                  >
                    <option selected>Select a provider</option>
                    {data.providers.map((provider) => (
                      <option>{`${provider.firstName} ${provider.lastName} ${provider.suffix}`}</option>
                    ))}
                  </Select> */}
                    
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
                  <p >{checkEmail}</p>
                  
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
  
                  <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Remember me"/>
  
                  <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleFormSubmit}>
                    Create Account
                  </Button>
                  <p id='err-message'></p>
  
                  <Typography> 
                    Already have an Account? 
                    {/* DO NOT add href attribute it will not work correctly, but can change the element type if you want */}
                    <Link onClick={() =>changePage('Login')}>
                      Login 
                    </Link>
                  </Typography>
  
                </Box>
              </Box>
            </Box>
          </Box>
          <Footer />
        </Box>
    )
  }
}

export default AccountCreate;