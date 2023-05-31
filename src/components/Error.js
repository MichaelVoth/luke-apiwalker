import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>These aren't the droids you're looking for</h1>
            <img src="/obi-wan.jpeg" alt="Obiwan Kenobi" />
            <br />
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Error