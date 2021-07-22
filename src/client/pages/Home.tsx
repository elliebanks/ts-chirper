import React from 'react';
import Details from './Details';
import Compose from './Compose';
import { useState, useEffect } from 'react';

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
        <Compose />
        
    </>
    )
}
interface HomeProps {

}

export default Home;