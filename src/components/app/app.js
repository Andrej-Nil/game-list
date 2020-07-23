import React, {Component} from 'react';
import './app.scss';
import Header from "../header/header";
import Filterbar from "../filterbar";
import ListGames from "../list-games";

export default class App extends Component{
    state={
        games: [
            {
                name: 'Bloodborne',
                year: '2014',
                genre: 'action\\RPG',
                img: './img/bloodborne.jpg',
                by: 'FromSoftware',
                id: '1'
            },
            {
                name: 'Bloodborne',
                by: 'FromSoftware',
                year: '2014',
                genre: 'action\\RPG',
                img: './img/bloodborne.jpg',
                id: '2'
            },
            {
                name: 'Bloodborne',
                by: 'FromSoftware',
                year: '2014',
                genre: 'action\\RPG',
                img: './img/bloodborne.jpg',
                id: '3'
            },
            {
                name: 'Bloodborne',
                by: 'FromSoftware',
                year: '2014',
                genre: 'action\\RPG',
                img: './img/bloodborne.jpg',
                id: '4'
            },
            {
                name: 'Bloodborne',
                by: 'FromSoftware',
                year: '2014',
                genre: 'action\\RPG',
                img: './img/bloodborne.jpg',
                id: '5',
            },
        ]
    };
    render(){
        const {games} = this.state;
      return (
        <div className="app">
            <div className='wrapper'>
                <Header />
                <div className='d-flex'>
                    <Filterbar />
                    <ListGames games={games}/>
                </div>
            </div>
        </div>

      );
    }
}

