// const express = require('express');
import express from 'express';
// const axios = require('axios');
import axios from 'axios';
// const translate = require('translate');
import translate from 'translate';
import {PlanetResponseDTO} from "../dto/PlanetReponseDTO.js";
import {PlanetDTO} from "../dto/PlanetDTO.js";

export const routes = express.Router({
    mergeParams: true
});


routes.get('/', async (req, res) => {
    const api_url = `https://swapi.dev/api/planets`
    const fetch_response = await axios.get(api_url);
    const json = await fetch_response.data;


    // console.log(JSON.stringify(object));

    let object = new PlanetResponseDTO(json);

    let planets = []

    let i = 0;

    while (i < object.results.length) {
        let planetObject = new PlanetDTO(object.results[i]);
        console.log(planetObject);
        planets.push(planetObject);
        i++;
    }

    // console.log(planets);

    // const json1 = JSON.stringify(json);
    // console.log(json1);

    // const text = await translate(json, 'es');
    // console.log(text);

    // translate.engine = "deepl";
    // translate.key = process.env.DEEPL_KEY;

    // const text = await translate(json1, "es");
    // console.log(text);


    res.status(200).json(planets);
})


// module.exports = routes;
