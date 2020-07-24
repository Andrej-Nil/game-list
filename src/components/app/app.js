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
                name: 'Uncharted 4',
                by: 'Naughty Dog',
                year: '2013',
                genre: 'action-adventure',
                img: './img/uncharted4.jpg',
                id: '2'
            },
            {
                name: 'Resident Evil 2',
                by: 'Capcom',
                year: '2019',
                genre: ' survival horror',
                img: './img/re2.jpg',
                id: '3'
            },
            {
                name: 'Dark Souls 3 goty',
                by: 'FromSoftware',
                year: '2017',
                genre: 'action\\RPG',
                img: './img/dr3.jpg',
                id: '4'
            },
            {
                name: 'God of War',
                by: 'SCE Santa Monica Studio',
                year: '2018',
                genre: 'action-adventure',
                img: './img/gow.jpg',
                id: '5',
            },
        ],
        term: '',
    };

    onSearchChange = (term) => {
        this.setState({
            term
        })
    };

    search(games, term){
        if(term.length === 0) {
            return games;
        }

        return games.filter( (item) => {
            return item.name
                .toLowerCase()
                .indexOf(term.toLowerCase()) > - 1;
        })
    }
    render(){
        const {games, term} = this.state;
        const visibleItem = this.search(games, term);
      return (
        <div className="app">
            <div className='wrapper'>
                <Header />
                <div className='d-flex'>
                    <Filterbar
                        onSearchChange={this.onSearchChange}
                    />
                    <ListGames games={visibleItem}/>
                </div>
            </div>
        </div>

      );
    }
}

