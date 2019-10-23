import React from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../../NoteContext'
import PropTypes from 'prop-types'

export default function SideNote(props) {
    
    SideNote.propTypes = {
        folders: PropTypes.string
    }
    console.log('props', props)
    console.log('side note context', props.contextValue)
// if (props.contextValue.folders.length == 0) {
//     return null
// if (props.contextValue.length == 0) {
//     return null
// } else {
    return (
        
        <div className='SideNote'>
            <Link to='/'>Back</Link>
            <NoteContext.Consumer>
                
                {value.folders.length == 0 ?
                    (value) => {
                    const folderHeader = value.folders.filter(folder => folder.id === props.match.params.folderId)
                    console.log('folderheader is', folderHeader)
                    console.log('value', value)
                    return (
                        <div>{folderHeader[0].name}</div>
                    )
                }
            :
            null
            }
                

            </NoteContext.Consumer>
        </div>
    )}
    
//}