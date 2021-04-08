import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning w-100">
            <div className="container-fluid container">
                <h3 className=" font-weight-bold">Book Corner</h3>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto font-weight-bold">
                        <Link className="nav-link px-4 text-danger" to="/home">Home</Link>
                        <Link className="nav-link px-4 text-danger" to="/orderBooked">Orders</Link>
                        <Link className="nav-link px-4 text-danger" to="/admin">Admin</Link>
                        <Link className="nav-link px-4 text-danger" to="/deals">Deals</Link>
                    </div>
                    {
                        loggedInUser.email ?
                            <div className="d-flex ">
                                <div> <button className="mx-4 btn btn-danger " onClick={() => setLoggedInUser({})}>Log Out</button></div>
                                <div className="rounded text-white bg-primary p-2">User : {loggedInUser.name || loggedInUser.email}</div>
                            </div> :
                            <Link className="nav-link px-4 font-weight-bold btn btn-primary" to="/login">Login</Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;