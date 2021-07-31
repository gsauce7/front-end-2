import React, { Component } from 'react'
import axios from "axios"


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: "",
            username: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
    })
    }

    handleSubmit = (event) => {
        this.setState({
            password: '',
            username: '',
        })
        event.preventDefault()

        axios.post('https://ptct-african-marketplace-5.herokuapp.com/api/auth/login', this.state)
        .then(res => {
            console.log("happy path!", res.data);
            localStorage.setItem('token', res.data.token);
            //window.location.href = "/listings";
        })
        .catch(err => {
            console.log("sad path:(", err)
        })
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container">
                <h1>Login</h1>
                    <label>Username :</label> 
                    <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.usernamehandler} 
                        placeholder="Username..." />
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