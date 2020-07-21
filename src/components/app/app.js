import React, {Component} from 'react';
import './app.scss';
import Header from "../header/header";
import Filterbar from "../filterbar";
import ListGames from "../list-games";

export default class App extends Component{
    render(){
      return (
        <div className="app">
            <div className='wrapper'>
                <Header />
                <div className='d-flex'>
                    <Filterbar />
                    <ListGames />
                </div>
            </div>
        </div>

      );
    }
}

