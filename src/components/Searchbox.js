import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Searchbox = (props) => {
    
    const [search, setSearch] = useState("people");
    const [id, setId] = useState();
    const navigate = useNavigate();

    
    const onSubmitHandler = (e) => { // When the form is submitted
        e.preventDefault();
        props.setSearch(search); // Set the search term in the parent component
        props.setId(id); // Set the ID in the parent component
        setId(""); // Reset the ID in the local state variable
        navigate(`/${search}/${id}`);  // Navigate to the results page

    }

    return (
        <div>
            <h1>Star Wars API</h1>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="search">Search for:</label>
                <select name="search" id="search" onChange={(e)=> setSearch(e.target.value)} >
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label htmlFor="id">ID:</label>
                <input type="number" name="id" id="id" onChange={(e)=>setId(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}
export default Searchbox;