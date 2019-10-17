import React, { Component } from 'react'
import './Note.css'
import { Link } from 'react-router-dom'
import NoteContext from '../../../NoteContext'
import PropTypes from 'prop-types'


export default class Note extends Component {
    static contextType = NoteContext;
    
    handleDeleteNote = (event, noteId) => {
        event.preventDefault();
        fetch(`http://localhost:9090/notes${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
          
        })
        .then(response => response.json())
        .then(response => this.context.deleteNote(noteId))
        .then(this.props.history.push(`/`))
      }


    render() {
      Note.propTypes = {
        folders: PropTypes.string,
        notes: PropTypes.string
    }
        const noteArray = this.context.notes.filter(note => note.id === this.props.match.params.noteId);
        const note = noteArray[0]
        const folder = this.context.folders.filter(folder => folder.id === this.props.match.params.folderId)
    return (
        <div className='Note'>
            <li className='IndvNote' key={note.id}>
                    <Link to={`folder/${folder.id}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
                    <p className='NoteDate'>{note.modified}</p>
                    <button className='DeleteNoteButton' onClick={e => this.handleDeleteNote(e, note.id)}>Delete Note</button>
            </li>
            <p className='NoteContent'>{note.content}</p>
            
        </div>
    )
}
}


// export default function Note() {

//     const noteArray = props.notes.filter(note => note.id === props.match.params.noteId);
//     const note = noteArray[0]
//     const folder = props.folders.filter(folder => folder.id === props.match.params.folderId)
    
    
    
//     return (
//         <div className='Note'>
//             <li className='IndvNote' key={note.id}>
//                     <Link to={`folder/${folder.id}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
//                     <p className='NoteDate'>{note.modified}</p>
//                     <button className='DeleteNoteButton'>Delete Note</button>
//                 </li>
//             <p className='NoteContent'>{note.content}</p>
            
//         </div>
//     )
// }