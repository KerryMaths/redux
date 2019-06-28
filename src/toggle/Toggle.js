import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMessage } from '../toggle/actions'
import { getMovies } from '../movies/actions'

const Toggle = ({ messageVisibility, toggleMessage, getMovies })=> {
  
return (
    <div>
      {messageVisibility && 
        <p>Message will be visible</p>
      }
      <button onClick={toggleMessage}>Toogle</button>
      <button onClick={getMovies}>Load movies</button>
    </div>
)}

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
  getMovies
},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Toggle)