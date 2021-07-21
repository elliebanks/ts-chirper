import React from 'react';
import Timeline from './Timeline';
import Compose from './Compose';
import { useState, useEffect } from 'react';

const Home = () => {

    const[chirps, setChirps] = useState([]);
    useEffect(() => {
        (async () => {
            let res = await fetch("/api/chirps");
            let chirps = await res.json();
            setChirps(chirps);
        }) ()
    })

    return (
    <>
        <Compose />
        <Timeline />
    </>
    )
}

export default Home;