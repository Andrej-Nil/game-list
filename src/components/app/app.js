import React, {Component} from 'react';
import './app.scss';
import Header from "../header";
import GameList from "../game-list";

export default class App extends Component{
    state={
        games: [
            {
                title: 'Bloodborne',
                by: 'FromSoftware',
                genre: 'action/RPG',
                year: '2014',
                format: 'disk',
                isPlayed: 'Passed',
                id: '1'
            },
            {
                title: 'Uncharted 4',
                by: 'Naughty Dog',
                genre: 'action-adventure',
                year: '2013',
                format: 'disk',
                isPlayed: 'Played',
                id: '2'
            },
            {
                title: 'Resident Evil 2',
                by: 'Capcom',
                genre: 'survival horror',
                year: '2019',
                format: 'ps plus',
                isPlayed: 'No played',
                id: '3'
            },
            {
                title: 'Dark Souls 3 goty',
                by: 'FromSoftware',
                genre: 'action/RPG',
                year: '2017',
                format: 'ps plus',
                isPlayed: 'Passed',
                id: '4'
            },
            {
                title: 'God of War',
                by: 'SCE Santa Monica Studio',
                genre: 'action-adventure',
                year: '2018',
                format: 'hdd',
                isPlayed: 'Played',
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

