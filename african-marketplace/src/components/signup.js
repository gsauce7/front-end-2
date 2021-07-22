import React, { Component } from 'react'
import "./signupForm.css"
import axios from 'axios'


class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
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
        // console.log(this.state);
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
        const { firstName, lastName, password, email, seller } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container">
                    <h1>Sign Up</h1>

                    <label>FirstName :</label> 
                    <input 
                        type="text" 
                        name='firstName'
                        value={firstName} 
                        onChange={this.changeHandler} 
                        placeholder="FirstName..." />
                    <br />

                    <label>LastName :</label> 
                    <input 
                        type="text" 
                        name='lastName'
                        value={lastName} 
                        onChange={this.changeHandler}  
                        placeholder="LastName..." />
                    <br />

                    <label>Password :</label> 
                    <input 
                        type="password" 
                        name='password'
                        value={password} 
                        onChange={this.changeHandler}  
                        placeholder="Password..." />
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