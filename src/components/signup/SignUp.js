import React from 'react';
import {Link} from 'react-router';

class SignUp extends React.Component{
    render(){
        return(
            <div className="mid-right">
                <form method="post" action="">
                    <h1>Create account</h1>

                    <div className="form-group">
                        <input className="form-control" id="firstname" name="firstname"
                               value=""
                               aria-required required placeholder="Your Sur Name" />
                    </div>

                    <div className="form-group">
                        <input className="form-control" id="lastname" name="lastname"
                               value=""
                               aria-required required placeholder="Your last name" />
                    </div>

                    <div className="form-group">
                        <input className="form-control" id="Username" name="username"
                               value=""
                               aria-required required placeholder="Username eg. JamesDoe" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="Password" name="password"
                               value=""
                               aria-required required placeholder="Password" />
                    </div>

                    <br/>
                    <button className="btn btn-primary" type="submit">Create</button>

                    <br />
                    <br />
                    Already have an account? &nbsp;&nbsp;&nbsp;
                    <a href="/login" className="btn btn-warning">Sign in</a>
                    <br />
                    <br />

                </form>
            </div>
        );
    }
}

export default SignUp;