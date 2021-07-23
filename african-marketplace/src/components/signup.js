import React, { Component } from 'react'
import "../styles/signupForm.css"
import axios from 'axios'


class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            last_name: "",
            password: "",
            password_confirmation: "",
            email: "",
            seller: false,

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    sellerhandler = (event) => {
        this.setState({
            seller: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault()
        
        axios.post(null)
        .then(res => {
            console.log("response:", res)
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        const { first_name, last_name, password, password_confirmation, email, seller } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container">
                    <h1>Sign Up</h1>

                    <label>First Name :</label> 
                    <input 
                        type="text" 
                        name='first_name'
                        value={first_name} 
                        onChange={this.changeHandler} 
                        placeholder="First Name..." />
                    <br />

                    <label>Last Name :</label> 
                    <input 
                        type="text" 
                        name='last_name'
                        value={last_name} 
                        onChange={this.changeHandler}  
                        placeholder="Last Name..." />
                    <br />

                    <label>Password :</label> 
                    <input 
                        type="password" 
                        name='password'
                        value={password} 
                        onChange={this.changeHandler}  
                        placeholder="Password..." />
                    <br />

                    <label>Password Confirmation:</label> 
                    <input 
                        type="password" 
                        name='password_confirmation'
                        value={password_confirmation} 
                        onChange={this.changeHandler}  
                        placeholder="Confirm Password..." />
                    <br />

                    <label>Email :</label> 
                    <input 
                        type="text" 
                        name='email'
                        value={email} 
                        onChange={this.changeHandler}  
                        placeholder="Email..." />
                    <br />
                    
                    <label>Are you a seller?</label> 
                    <input 
                        type="checkbox" 
                        name='seller'
                        value={seller} 
                        onChange={this.sellerhandler} 
                        placeholder="Are you a seller?" />
                    <br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
            
        )
    }
}

export default SignUpForm