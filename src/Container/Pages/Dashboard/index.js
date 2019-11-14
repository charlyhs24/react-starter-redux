import React, { Component } from 'react'
import './dashboard.scss'
import { connect } from 'react-redux'
import { addDataToApi, getDataFromApi } from '../../../Config/Redux/Action'
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
    componentDidMount = async () => {
        const userData = JSON.parse(localStorage.getItem("userData"))
        const res = await this.props.getNotes(userData.uid)
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
        this.props.saveNotes(data)
    }
    render() {
        const { note } = this.props
        console.log(note)
        return (
            <div className="container">
                <div className="input_form">
                    <input name="title" onChange={this.handleChage} placeholder="title" className="input_title"/>
                    <textarea name="content" onChange={this.handleChage} placeholder="content" className="input_content"></textarea>
                    <button className="save_btn" onClick={this.handleSaveNotes}>Simpan</button>
                </div>
                {
                    note.map((response, idx) => (
                        <div key={idx} className="card_content">
                            <p className="title">{response.title}</p>
                            <p className="date">21 sept 2019</p>
                            <p className="content">{response.content}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}
const reduxState = (state) => ({
    userData : state.user,
    note : state.note
})
const reduxDispatch = (dispatch) => ({
    saveNotes : (data) => dispatch(addDataToApi(data)),
    getNotes : (userID) => dispatch(getDataFromApi(userID))
})
export default connect(reduxState,reduxDispatch) (Dashboard)