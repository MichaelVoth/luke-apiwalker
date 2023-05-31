import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Results = (props) => {
    const [data, setData] = useState({}); // The data from the API
    const [homeworld, setHomeworld] = useState({}); // The data for homeworld
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${props.search}/${props.id}`) // Make a GET request to the API
            .then((response) => setData(response.data)) // Set the data in the response to the data state variable
            .catch((err) => {
                console.log(err);
                navigate("/error");
            }); // Catch any errors and log them to the console and redirect to the error page
    }, [props.search, props.id]);

    useEffect(() => {
        if (props.search === "people" && data.homeworld) { // If the search is for people and the homeworld data is available
            axios
                .get(data.homeworld) // Make a GET request for homeworld data
                .then((response) => setHomeworld(response.data)) // Set the homeworld data in the state variable
                .catch((err) => console.log(err));
        }
    }, [props.search, data.homeworld]);

    return (
        <div>
            {props.search === "people" ? (
                // If the search is for people, display the following
                <div>
                    <h1>{data.name}</h1>
                    <p>Birth Year: {data.birth_year}</p>
                    <p>Gender: {data.gender}</p>
                    <p>Height: {data.height}</p>
                    <p>Mass: {data.mass}</p>
                    <p>Hair Color: {data.hair_color}</p>
                    {homeworld.name && (
                        // Display homeworld information if available
                        <div>
                            <h2>Homeworld</h2>
                            <p>Name: {homeworld.name}</p>
                            <p>Climate: {homeworld.climate}</p>
                            <p>Terrain: {homeworld.terrain}</p>
                            <p>Population: {homeworld.population}</p>
                        </div>
                    )}
                </div>
            ) : props.search === "planets" ? (
                // If the search is for planets, display the following
                <div>
                    <h1>{data.name}</h1>
                    <p>Climate: {data.climate}</p>
                    <p>Terrain: {data.terrain}</p>
                    <p>Surface Water: {data.surface_water}</p>
                    <p>Population: {data.population}</p>
                </div>
            ) : (
                // If the search is for starships, display the following
                <div>
                    <h1>{data.name}</h1>
                    <p>Model: {data.model}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                    <p>Crew: {data.crew}</p>
                    <p>Passengers: {data.passengers}</p>
                    <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
                </div>
            )}
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Results;
