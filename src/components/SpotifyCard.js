import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

function SpotifyCard () {

    const handleLogin = async () => {
        await axios.get('http://127.0.0.1:8000/request-spotify-login').then(response => {
            window.location.href = `${response.data.url}`;
        }).catch(error => {
            console.log(error);
        })
    };

    // TODO: Setup proper display of the three albums i have and the user profile

    const fetchUserInformation = async () => {
        await axios.get('http://127.0.0.1:8000/user', {headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`}}).then(response => {
            console.log(response);
        })
    }

    const fetchUserPlaylists = async () => {
        await axios.get('http://127.0.0.1:8000/me-playlists', {headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`}}).then(response => {
            console.log(response);
        })
    }

    return <>
        {localStorage.getItem('access_token') ? <>
            <Button onClick={() => fetchUserInformation()}> Test </Button>
            <Button onClick={() => fetchUserPlaylists()}> Test 2 </Button>
        </> : <Button onClick={() => handleLogin()}> Login </Button>}
    </>

}

export default SpotifyCard;