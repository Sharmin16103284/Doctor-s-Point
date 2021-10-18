import React from 'react'
import useFirebase from '../../../hooks/useFirebase'

function Registration() {

    const { emailpassReg, catchEmail, catchPassword, error } = useFirebase();

    return (
        <div>
            <div className=" container">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <h1 className="text-center">Sign Up</h1>
                    <div className="col-md-12 shadow p-5">
                        <form onSubmit={emailpassReg}>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" onBlur={catchEmail} className="form-control" id="email" name="email" placeholder="Your email address" required></input>
                            </div>

                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" onBlur={catchPassword} className="form-control" id="password" name="password" required></input>
                            </div>
                            <input type="submit" value="Sign Up" className="btn" style={{ backgroundColor: '#5E6061', color: 'white' }} />
                            <div className="text-danger">{error}</div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registration
