import React from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../../NoteContext'
import PropTypes from 'prop-types'

export default function SideNote(props) {
    
    SideNote.propTypes = {
        folders: PropTypes.string
    }
    console.log('props', props)
    console.log('folders', SideNote.propTypes.folders)
if (SideNote.propTypes.folders) {
    return (
        
        <div className='SideNote'>
            <Link to='/'>Back</Link>
            <NoteContext.Consumer>
                {(value) => {
                    const folderHeader = value.folders.filter(folder => folder.id === props.match.params.folderId)
                    console.log('folderheader is', folderHeader)
                    console.log(value)
                    return (
                        <div>{folderHeader[0].name}</div>
                    )
                }}
            </NoteContext.Consumer>
        </div>
    )}
    
}