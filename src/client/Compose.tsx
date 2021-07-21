import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Compose = () => {

    const history = useHistory();
    const [username, setUsername] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setUsername(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => 
    setMessage(e.target.value);

    const sendChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch("/api/chirps", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ username, message })
        });
        if(res.ok) {
            history.push('/');
        } else {
            console.log(Error)
        }
    }
    return(<h1>This is the Compose component</h1>)
}

export default Compose;