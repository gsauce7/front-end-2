import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: "",
            email: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
    })
    }

    handleSubmit = (event) => {
        console.log(this.state);
        this.setState({
            password: '',
            email: '',
        })
        event.preventDefault()
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container">
                <h1>Login</h1>
                    <label>Email :</label> 
                    <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.emailhandler} 
                        placeholder="Email..." />
                    <br />
                    <label>Password :</label> 
                    <input 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.passwordhandler} 
                        placeholder="Password..." />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login