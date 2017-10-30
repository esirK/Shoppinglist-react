import React from 'react';
import {Link} from 'react-router';

class SignUp extends React.Component{

    constructor(props, context){
        super(props, context);
        
        this.user =  {
            firstname: "",
            lastname: "",
            username: "",
            password: ""
        };

        this.state = {
            user: this.user
        };

        this.onClickSignUp = this. onClickSignUp.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateUserName = this.updateUserName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }



    updateFirstName(event) {
        this.user.firstname = event.target.value;
        this.updateState();
    }

    updatePassword(event) {
        this.user.password = event.target.value;
        this.updateState();
    }

    updateUserName(event) {
        this.user.username = event.target.value;
        this.updateState();
    }

    updateLastName(event) {
        this.user.lastname = event.target.value;
        this.updateState();
    }

    updateState(){
        this.setState({user: this.user});
    }

    onClickSignUp(event){
        event.preventDefault();
        console.log(this.state.user);
    }

    render(){
        return(
            <div className="mid-right">
                <form method="post" onSubmit={this.onClickSignUp}>
                    <h1>Create account</h1>

                    <div className="form-group">
                        <input className="form-control" aria-required="true" required
                               placeholder="Your Sur Name"
                               value={ this.state.user.firstname } onChange={this.updateFirstName} />
                    </div>

                    <div className="form-group">
                        <input className="form-control" aria-required required
                               placeholder="Your last name"
                               value={ this.state.user.lastname } onChange={this.updateLastName}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" aria-required required
                               placeholder="Username eg. JamesDoe"
                               value={ this.state.user.username } onChange={this.updateUserName}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" aria-required required
                               placeholder="Password"
                               value={ this.state.user.password } onChange={this.updatePassword}/>
                    </div>

                    <br/>
                    <button className="btn btn-primary" type="submit">Create</button>

                    <br />
                    <br />
                    Already have an account? &nbsp;&nbsp;&nbsp;
                    <Link to="/login" className="btn btn-warning">Sign in</Link>
                    <br />
                    <br />

                </form>
            </div>
        );
    }


}

export default SignUp;