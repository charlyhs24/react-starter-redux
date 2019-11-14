import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginUserApi } from '../../../Config/Redux/Action'
import Button from '../../../Component/Atoms/Button'
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : ""
        }
    }
    changeUser = () => {
        this.props.changeUserName()
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit = async () => {
        const {email, password } = this.state
        const res = await this.props.loginUserApi({email:email, password:password}).catch(err => err)
        if(res){
            this.setState({
                email : "",
                password : ""
            })
            localStorage.setItem("userData",JSON.stringify(res))
            this.props.history.push("/")
        }else{
            this.props.history.push("/login")
        }
    }
    render() {
        return (
            <div className="auth_container">
                <div className="auth_card">
                    <p className="auth_title">Login Page</p>
                    <input className="input" value={this.state.email} name="email" onChange={this.handleChange} placeholder="email" type="email"/>
                    <input className="input" value={this.state.password}name="password" onChange={this.handleChange} placeholder="password" type="password"/>
                    <Button onClick={this.handleSubmit} Title={"Login"} loading={this.props.isLoading} />
                </div>
            </div>
        )
    }
}
const reduxState = (state) => ({
    isLoading : state.isLoading
})
const reduxDispatch = (dispatch) => ({
    loginUserApi : (data) => dispatch(LoginUserApi(data))
})
export default connect(reduxState, reduxDispatch) (Login)