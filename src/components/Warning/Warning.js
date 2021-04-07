import React from 'react';
import { Link } from 'react-router-dom';

const Warning = () => {
    return (
        <div className="text-center my-5">
            <h3>Please select book first</h3>
            <Link to="/home" className="btn btn-success">Go Home</Link>
        </div>
    );
};

export default Warning;