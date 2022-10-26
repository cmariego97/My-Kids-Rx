import React,{useState} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../utils/queries';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const Profile = () => {
    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_PROFILE, {
        variables: { email }
    });

    var titleCase = function(str) {
        var result = [];
        var words = str.split(" ");
        for (var i = 0; i < words.length; i++) {
          var word = words[i].split("");
          word[0] = word[0].toUpperCase();
          result.push(word.join(""));
        }
        return result.join(" ");
      };
      //for modal
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      //for settings
      const [currentPass, setCurrentPass] = useState('');
      const [newPass, setNewPass] = useState('');

    if(loading) {
        return (
            <h1>Loading profile...</h1>
        )
    }
    else {
        console.log(data);
        const user = data.oneUser
        const fullName= titleCase(`${user.firstName} ${user.lastName}`);

        const handleChange = (e) => {
            const { name, value } = e.target;
            if (name === 'currentPass') {
                setCurrentPass(value);
            }
            if (name === 'newPass') {
                setNewPass(value);
            }
        }

        const changePassword = (e) => {
            e.preventDefault();
            if (currentPass !== user.password) {
                document.querySelector('#message-el').textContent = 'Current password incorrect, unable to change password'
            }
            else {
                document.querySelector('#message-el').textContent = 'Good test'
            }
        } 
        return (
            <div>
                <h1>{`Hello, ${fullName}`}</h1>
                <li>{`Email: ${user.email}`}</li>
                <li>{`Provider: ${user.provider}`}</li>
                {/* TODO: add options to update provider or update password if time */}
                <h2>Settings:</h2>
                <Button variant="outlined">Change Provider
            </Button>
            <Button variant="outlined" onClick={handleOpen}>Change Password
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                 <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Enter Current Password
                </Typography>
                <input type='password' name='currentPass'value={currentPass} onChange={handleChange}></input>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Enter New Password
                </Typography>
                <input type='password' name='newPass' value={newPass} onChange={handleChange}></input>
                <button onClick={changePassword}>Change Password</button>
                <p id='message-el'></p>
                </Box>
            </Modal>

            </div>
        )
    }
}

export default Profile;


