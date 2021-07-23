import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { IChirp }

const Details = () => {
    const { id } = useParams<{ id: string}>();
    const [chirp, setChirp] = useState<IChirp>({ id: id, user: "", message: "" })

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirps = await res.json();
            setChirp(chirp);
        }) ();
    })
    return (
        <>
        
        <div>
            
        </div>
        </>
        )
}

interface DetailsProps {}

export default Details;