import React from 'react';
import {Link} from 'react-router';

class SignUp extends React.Component{
    render(){
        return(
            <div class="mid-right">
                <form method="post" action="">
                    <h1>Create account</h1>

                    <div class="form-group">
                        <input class="form-control" id="firstname" name="firstname"
                               value=""
                               aria-required required placeholder="Your Sur Name" />
                    </div>

                    <div class="form-group">
                        <input class="form-control" id="lastname" name="lastname"
                               value=""
                               aria-required required placeholder="Your last name" />
                    </div>

                    <div class="form-group">
                        <input class="form-control" id="Username" name="username"
                               value=""
                               aria-required required placeholder="Username eg. JamesDoe" />
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" id="Password" name="password"
                               value=""
                               aria-required required placeholder="Password" />
                    </div>

                    <br/>
                    <button class="btn btn-primary" type="submit">Create</button>

                    <br />
                    <br />
                    <!-- Display error message if there are any -->

                    <br />
                    <br />
                    Already have an account? &nbsp;&nbsp;&nbsp;
                    <a href="/login" class="btn btn-warning">Sign in</a>
                    <br />
                    <br />

                </form>
            </div>
        );
    }
}

export default SignUp;