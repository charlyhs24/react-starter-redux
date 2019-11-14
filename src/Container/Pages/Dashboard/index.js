import React, { Component } from 'react'
import './dashboard.scss'
import { connect } from 'react-redux'
import { addDataToApi } from '../../../Config/Redux/Action'
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            content : '',
            date : '',
        }
    }
    handleChage = (e) => {
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }
    handleSaveNotes = () => {
        const { title, content } = this.state
        const uid = JSON.parse(localStorage.getItem("userData")).uid
        const data = {
            title   : title,
            content : content,
            date    : new Date(),
            userId  : uid
        }
        console.log(data.userId)
        this.props.saveNotes(data)
    }
    render() {
        // console.log(this.props.userData.uid)
        return (
            <div className="container">
                <div className="input_form">
                    <input name="title" onChange={this.handleChage} placeholder="title" className="input_title"/>
                    <textarea name="content" onChange={this.handleChage} placeholder="content" className="input_content"></textarea>
                    <button className="save_btn" onClick={this.handleSaveNotes}>Simpan</button>
                </div>
                <div className="card-content">
                    <p className="title">Title</p>
                    <p className="date">21 sept 2019</p>
                    <p className="content">Content Notes</p>
                </div>
            </div>
        )
    }
}
const reduxState = (state) => ({
    userData : state.user
})
const reduxDispatch = (dispatch) => ({
    saveNotes : (data) => dispatch(addDataToApi(data))
})
export default connect(reduxState,reduxDispatch) (Dashboard)