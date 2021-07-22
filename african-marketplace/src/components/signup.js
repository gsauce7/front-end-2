import React, { Component } from 'react'
import "./signupForm.css"



class Form extends Component {
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

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
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

    sellerhandler = (event) => {
        this.setState({
            seller: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            email: '',
            seller: false,
        })
        event.preventDefault()
        
    }


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit} className="container">
                    <h1>Sign Up</h1>
                    <label>FirstName :</label> 
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        onChange={this.firsthandler} 
                        placeholder="FirstName..." />
                    <br />

                    <label>LastName :</label> 
                    <input 
                        type="text" 
                        value={this.state.lastName} 
                        onChange={this.lasthandler} 
                        placeholder="LastName..." />
                    <br />

                    <label>Password :</label> 
                    <input 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.passwordhandler} 
                        placeholder="Password..." />
                    <br />

                    <label>Email :</label> 
                    <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.emailhandler} 
                        placeholder="Email..." />
                    <br />

                    <label>Are you a seller?</label> 
                    <input 
                        type="checkbox" 
                        value={this.state.seller} 
                        onChange={this.sellerhandler} 
                        placeholder="Are you a seller?" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form