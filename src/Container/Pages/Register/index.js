import React, { Component } from 'react'
import './register.scss'
import Button from '../../../Component/Atoms/Button'
import { connect } from 'react-redux'
import { registerApi } from '../../../Config/Redux/Action'
class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit = async () => {
        const { email, password } = this.state
        const res = this.props.registerApi({email: email, password: password}).catch(err => err)
        if(res){
            this.props.history.push("/login")
            this.setState({
                email : "",
                password : ""
            })
        }else{
            this.setState({
                email : "",
                password : ""
            })
            this.props.history.push("/register")
        }
        
    }
    render() {
        return (
            <div className="auth_container">
                <div className="auth_card">
                    <p className="auth_title">Register Page</p>
                    <input className="input" value={this.state.email} name="email" onChange={this.handleChange} placeholder="email" type="email"/>
                    <input className="input" value={this.state.password}name="password" onChange={this.handleChange} placeholder="password" type="password"/>
                    <Button onClick={this.handleSubmit} Title={"Register"} loading={this.props.isLoading} />
                </div>
            </div>
        )
    }
}
const reduxState = (state) => ({
    isLoading : state.isLoading
})
const reduxDispatch = (dispatch) => ({
    registerApi : (data) => dispatch(registerApi(data))
})
export default connect(reduxState, reduxDispatch)(Register)