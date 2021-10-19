import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => { 
    const { googleSignIn } = useAuth();
    const { loginEmailPassword, catchEmail, catchPassword, error } = useFirebase(); 
 

    return (
        <div className=" container">
            <div className="row align-items-center" style={{ height: "80vh" }}>
                <h1 className="text-center">Sign In</h1>
                <div className="col-md-12 shadow p-5">

                    <form onSubmit={loginEmailPassword}>
                        <div className="form-group">
                            <label htmlFor="">User Email</label>
                            <input onBlur={catchEmail} type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input onBlur={catchPassword} type="password" className="form-control" />
                        </div>
                        
                        <div className="from-group mt-5 ">
                            <input type="submit" className="btn" value="Sign In" style={{ marginRight: '5px', backgroundColor: '#5E6061', color: 'white' }} />
                        </div> 

                        <div className="text-bg-danger">{error}</div>
                        
                    </form>
                    <Link to="/registration">
                            <p>Don't have any account? Sign Up here.</p> </Link>
                    
                    <button onClick={googleSignIn} className="btn mt-2" style={{ backgroundColor: '#5E6061', color: 'white' }}>Google Sign in</button>
                </div>
            </div>

        </div>
    );
};

export default Login;
