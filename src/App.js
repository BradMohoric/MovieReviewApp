import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieList from './components/movieList';


//main app page. Has a H1 header with the title, and a container div to hold the movielist component that holds everything else.
export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className="text-center" id="header">Cult Reviews</h1>
        <br></br>
        <div className="container">
          <MovieList />
        </div>
      </div>
          
    );
  }
}