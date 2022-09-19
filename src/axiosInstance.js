import axios from "axios";

const URL = "https://www.balldontlie.io/api/v1/";

export const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
});

//Primjeri

// Dohvaca statistiku za svaku utakmicu za igrača
// https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=237

// Dohvaca prosjeke sezona po igračevom ID-u. Defaultna je trenutna sezona...
// https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237

// Sva statistika od igraca
// https://www.balldontlie.io/api/v1/stats?player_ids[]=237

