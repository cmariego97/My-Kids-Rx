import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../utils/queries';

const Profile = () => {
    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
    const { loading, data } = useQuery(QUERY_PROFILE, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading profile...</h1>
        )
    }
    else {
        console.log(data);
        const user = data.oneUser
        return (
            <div>
                <h1>Hello, {user.firstName} {user.lastName}</h1>
                <li>Email: {user.email}</li>
                <li>Provider: {user.provider}</li>
                {/* TODO: add options to update provider or update password if time */}
                {/* <h2>Settings:</h2>
                <p></p> */}
            </div>
        )
    }
}

export default Profile;


