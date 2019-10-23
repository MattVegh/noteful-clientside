import React, { Component } from 'react';
import './App.css';
import FolderList from './Components/FolderList/FolderList'
import NoteList from './Components/NoteList/NoteList'
import AddFolder from './Components/AddFolder/AddFolder'
import AddNoteError from './Components/AddNote/AddNoteError'
import AddNote from './Components/AddNote/AddNote'
import { Route, Link } from 'react-router-dom'
import Note from './Components/NoteList/Note/Note'
import SideNote from './Components/SideNote/SideNote'
import NoteContext from './NoteContext'



class App extends Component {
  state = {
      folders: [],
      notes: []
  };
  
    
  

  componentDidMount() {
    Promise.all([
      fetch(`https://noteful-server-mv2.herokuapp.com/api/notes`),
      fetch(`https://noteful-server-mv2.herokuapp.com/api/folders`)
  ])
      .then(([notesRes, foldersRes]) => {
          if (!notesRes.ok)
              return notesRes.json().then(e => Promise.reject(e));
          if (!foldersRes.ok)
              return foldersRes.json().then(e => Promise.reject(e));

          return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
          this.setState({notes, folders});
      })
      .catch(error => {
          console.error({error});
      });
  }

  

  deleteNote = (deletedNote) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== deletedNote)
     });
  }


  addNewFolder = (newFolder) => {
    this.setState({folders: [...this.state.folders, newFolder]})

}
  addNewNote = (newNote) => {
    this.setState({notes: [...this.state.notes, newNote]})
  }

  

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote
    }
    console.log('context', contextValue)
  //if(contextValue.folders = []) {
    //return null 
  //} else  {
      return (
        <NoteContext.Provider value={contextValue} >
        <div className="App">
            <Link to='/' className='AppHeader'>Noteful</Link>
          <div className='ListsContainer'>
            <nav className='AppNav'>
              <Route exact path='/' component={FolderList}/>
              <Route exact path='/api/folder/:folderId' component={FolderList}/>
              <Route exact path='/api/folder/:folderId/:noteId' component={(props) => {return <SideNote {...props} contextValue={this.contextValue} />}} />
            </nav>
            <main className='AppMain'>
              <Route exact path='/' component={NoteList} />
              <Route exact path='/api/folder/:folderId' component={NoteList} />
              <Route path='/api/folder/:folderId/:noteId' component={Note} />
              <Route path='/AddFolder' component={(props) => {return <AddFolder {...props} addNewFolder={this.addNewFolder} />}} />
              <AddNoteError>
                <Route path='/AddNote' component={(props) => {return <AddNote {...props} addNewNote={this.addNewNote} />} }/>
              </AddNoteError>
              
            </main>
          </div>
        </div>
        </NoteContext.Provider>
  

    //     <div className="App">
    //     <Link to='/' className='AppHeader'>Noteful</Link>
    //   <div className='ListsContainer'>
    //     <nav className='AppNav'>
    //       <Route exact path='/' render={() => (<FolderList folders={this.state.folders} /> )}/>
    //       <Route path='/folder/:folderId' render={() => (<FolderList folders={this.state.folders} /> )}/>
    //       <Route path='/folder/:folderId/:noteId'  render={(props) => (<SideNote {...props} notes={this.state.notes} folders={this.state.folders} /> )} />
    //     </nav>
    //     <main className='AppMain'>
    //       <Route exact path='/' render={(props) => (<NoteList {...props} notes={this.state.notes} folders={this.state.folders} />  )}/>
    //       <Route exact path='/folder/:folderId' render={(props) => (<NoteList {...props} notes={this.state.notes} folders={this.state.folders} /> )}/>
    //       <Route 
    //         path='/folder/:folderId/:noteId' 
    //         render={(props) => (<Note {...props} notes={this.state.notes} folders={this.state.folders}/>)}
    //        />
    //       <Route path='/AddFolder' component={AddFolder} />
    //       <Route path='/AddNote' component={AddNote} />
    //     </main>
    //   </div>
    // </div>


      );
      }
  }
//}


export default App;
