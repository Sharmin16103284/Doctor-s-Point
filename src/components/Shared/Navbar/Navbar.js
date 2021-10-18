import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navbar = () => {
    const { logOut, user } = useAuth();
    console.log(user);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <h1 className="navbar-brand" style={{ color: '#5E6061', fontWeight: 'bold', fontSize: '2em' }}>Doctor's Point</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/service" className="nav-link">Doctor List</Link>
                            <Link to="/aboutUs" className="nav-link">About Us</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                            {user.email ?

                                <div>
                                    <Link to="/login">
                                        <button onClick={logOut} className="btn me-2" style={{ backgroundColor: '#B9BABC', margin: '2px' }}>Log-out</button>
                                    </Link>
                                    {/* <img style={{ height: '30px', borderRadius: '50%', marginRight: '5px' }} src={user.photoURL} alt="" /> */}
                                    <span>{user.displayName}</span>
                                </div>

                                : 
                                <Link to="/login">
                                    <p style={{ backgroundColor: '#B9BABC', margin: '2px' }}>
                                        <img src="https://img.icons8.com/ios-glyphs/30/000000/login-rounded-right.png" />
                                        <button className="btn me-2">Sign In</button>
                                    </p>
                                </Link>

                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;