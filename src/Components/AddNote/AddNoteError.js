import React, { Component } from 'react'

export default class AddNoteError extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    
    render() {
        if (this.state.hasError) {      
            return (
              <h6>Note could not be shown</h6>
            );
          }
          return this.props.children;
    }
}