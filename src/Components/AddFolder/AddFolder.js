import React, { Component } from 'react'
import './AddFolder.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class AddFolder extends Component {
    

    handleSubmit = (event) => {
        event.preventDefault();
        const name = (event.target['folderName'].value)
        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name
              })
        })
        .then(response => response.json())
        .then(response => this.props.addNewFolder(response))
        .then(this.props.history.push(`/`))
    }
    
    render() {
        AddFolder.propTypes = {
            folders: PropTypes.string
        }
    return (
        <form className='AddFolder' onSubmit={this.handleSubmit}>
            <Link to='/'>Back</Link>
            <h3>Create a folder</h3>
            <label htmlFor='folderName'>Folder Name</label>
            <input type='text' name='folderName' id='folderName' required></input>
            <button>Add Folder</button>
        </form>
    )

    }
}