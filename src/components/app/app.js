import React, {Component} from 'react';
import './app.scss';
import Header from "../header";
import GameList from "../game-list";

export default class App extends Component{
    state={
        games: [
            {
                name: 'Bloodborne',
                year: '2014',
                genre: 'action/RPG',
                by: 'FromSoftware',
                format: 'disk',
                id: '1'
            },
            {
                name: 'Uncharted 4',
                by: 'Naughty Dog',
                year: '2013',
                genre: 'action-adventure',
                format: 'disk',
                id: '2'
            },
            {
                name: 'Resident Evil 2',
                by: 'Capcom',
                year: '2019',
                genre: 'survival horror',
                format: 'ps plus',
                id: '3'
            },
            {
                name: 'Dark Souls 3 goty',
                by: 'FromSoftware',
                year: '2017',
                genre: 'action/RPG',
                format: 'ps plus',
                id: '4'
            },
            {
                name: 'God of War',
                by: 'SCE Santa Monica Studio',
                year: '2018',
                genre: 'action-adventure',
                format: 'digital',
                id: '5',
            },
        ],
        term: '',
    };

    render(){
        const {games} = this.state;
      return (
        <div className="app wrapper">
            <Header />
            <GameList games={games}/>

        </div>

      );
    }
}

