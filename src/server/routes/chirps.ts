import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "../chirpstore";
const express = require('express');


let router = express.Router();

router.get('/:id?', (req, res) => {
    
    const chirps = GetChirps()
    let chirpArr: any[] = []
    Object.keys(chirps).map(key => chirpArr.push({ id: key, name: chirps[key].name, msg: chirps[key].msg }))
    chirpArr.pop()

    let id = req.params.id
    if (id) {
        res.json(GetChirp(id));
    } else {
        res.send(GetChirps());
    }
});

//post chirp
router.post('/', (req, res) => {
    console.log(req.body);
    CreateChirp(req.body);
    res.sendStatus(200);
});

//this will update a chirp
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let chirp = req.body;

    UpdateChirp(id, chirp);
    return res.sendStatus(200);

});

//delete chirp
router.delete('/:id', (req, res) => {
    let id = req.params.id;

    DeleteChirp(id);
    return res.sendStatus(200);
});

export default router;