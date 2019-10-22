import React from 'react'
import './FolderList.css'
import { Link } from 'react-router-dom'
import NoteContext from '../../NoteContext';

export default function FolderList() {
    
    
    return (
        <NoteContext.Consumer>
            {(value) => {
            return (
                <div className='FolderList'>
                    <ul>
                        {value.folders.map(folder => <Link to={`/api/folder/${folder.id}`}key={folder.id}>{folder.name}</Link>)}
                    </ul>
                    <Link to='/AddFolder'>Add Folder</Link>
                </div>
            )
            }}
        </NoteContext.Consumer>
    )
}

// export default class FolderList extends Component {
//     static contextType = NoteContext;

//     render() {
//     const folders = this.context
//     console.log(folders)
//     return (
        
//         <div className='FolderList'>
//             <ul>
//             <NoteContext.Consumer>
//                 {this.context.folders.map(folder => <Link to={`/folder/${folder.id}`}key={folder.id}>{folder.name}</Link>)}
//             </NoteContext.Consumer>
//             </ul>
//             <Link to='/AddFolder'>Add Folder</Link>
//         </div>
        
//     )
//     }
// }