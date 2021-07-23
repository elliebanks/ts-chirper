import React from 'react';
import { useState, useEffect } from 'react';
import ChirpCard from './ChirpCard';
import Details from './Details';
import Compose from './Compose';

const Home: React.FC<HomeProps> = () => {

    const[chirps, setChirps] = useState([]);

    useEffect(() => {
        (async () => {
            let res = await fetch("/api/chirps");
            let chirps = await res.json();
            setChirps(chirps);
        }) ();
    })

    

    return (
    <>
        {chirps.map(chirp => <ChirpCard key={chirp.id} chirp={chirp}/>)}
        
    </>
    )
}
interface HomeProps {

}

export default Home;