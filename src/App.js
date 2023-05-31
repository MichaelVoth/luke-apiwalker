
import './App.css';
import Searchbox from './components/Searchbox';
import Results from './components/Results';
import Error from './components/Error';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [search, setSearch] = useState("people"); // The search term
  const [id, setId] = useState(); // The ID of the search term

  
return (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Searchbox // Render the Searchbox component
          setSearch={setSearch} // Pass setSearch to the Searchbox component
          setId={setId} // Pass setId to the Searchbox component
        />} />
        <Route path="/:search/:id" element={<Results // Render the Results component
          search={search} // Pass the search term to the Results component
          id={id} // Pass the ID to the Results component
        />} />
        <Route path="/error" element={<Error />} // Render the Error component
        /> 
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;
