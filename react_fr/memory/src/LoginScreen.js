import React, { Component } from 'react'

class LoginScreen extends Component {

    logIn = (event) => {
        event.preventDefault();
        console.log(this);
    }


    // logIn(event) {
    //     event.preventDefault()
    //     console.log('LOGIN', this)
    // }

    render() {
        return (
            <form onSubmit={this.logIn}>
                <p>
                    <button type="submit">Connexion !</button>
                </p>
            </form>
        )
    }
}

export default LoginScreen;