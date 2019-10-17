import React from 'react'
import './Folder.css'
import PropTypes from 'prop-types';



export default function Folder(props) {
    Folder.PropTypes = {
        folders: PropTypes.string
    }
    
    const folder = props.folders.find(folder => folder.id === props.match.params.folderId)
    
    return (
        <div className='Folder'>
            <li className='IndvFolder' key={folder.id}>
                    <p className='FolderContent'>placeholder</p>
            </li>
            
            
        </div>

    )
}