import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component{
    render(){
        return(
            <div className="mid-right">
                <form method="post" action="">
                    <h1>Login to your account</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Username" value=""
                               aria-required="true" required name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="Password" value=""
                               aria-required="true" required name="password" placeholder="Password" />
                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit">Login</button>
                    <br />
                    <br />
                    <br />
                        Don't have an account? &nbsp;&nbsp;&nbsp;
                    <a href="/signup" className="btn btn-warning">Create one</a>
                </form>
            </div>
        );
    }
}

export default Login;