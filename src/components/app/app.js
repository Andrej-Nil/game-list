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
                isPlayed: 'passed',
                id: '1'
            },
            {
                title: 'Uncharted 4',
                by: 'Naughty Dog',
                genre: 'action-adventure',
                year: '2013',
                format: 'disk',
                isPlayed: 'played',
                id: '2'
            },
            {
                title: 'Resident Evil 2',
                by: 'Capcom',
                genre: 'survival horror',
                year: '2019',
                format: 'ps plus',
                isPlayed: 'noPlayed',
                id: '3'
            },
            {
                title: 'Dark Souls 3 goty',
                by: 'FromSoftware',
                genre: 'action/RPG',
                year: '2017',
                format: 'ps plus',
                isPlayed: 'passed',
                id: '4'
            },
            {
                title: 'God of War',
                by: 'SCE Santa Monica Studio',
                genre: 'action-adventure',
                year: '2018',
                format: 'hdd',
                isPlayed: 'played',
                id: '5',
            },
        ],
        patternStr: '',
        isPlayedActive: 'all',
        format: 'all',
        selectGenre: 'all'
    };

    searchChange = (patternStr) => {
        this.setState({patternStr});
    };

    search(arr, patternStr) {
        if(patternStr.label === 0){
            return arr;
        }

        return arr.filter( (item) => {
            return item.title
                .toLowerCase()
                .indexOf(patternStr) > -1;
        })
    }

    isPlayedFilter(arr, isPlayedActive) {
        if(isPlayedActive === 'all'){
            return arr
        }
       return (
           arr.filter((el) => el.isPlayed === isPlayedActive)
       )
    }

    isPlayedChangeBtn = (id) => {

        this.setState(({games}) => {
            const idx = this.findIdx(id);
            const game =  games[idx];
            switch (game.isPlayed) {
                case "noPlayed": {
                    game.isPlayed = 'played';
                    break;
                }

                case "played": {
                    game.isPlayed = 'passed';
                    break;
                }
                case "passed": {
                    game.isPlayed = 'noPlayed';
                    break;
                }
                default: {
                    game.isPlayed = 'noPlayed';
                }
            }
            const newArr = [
                ...games.slice(0, idx),
                game,
                ...games.slice(idx + 1)
            ];

            return {
                games: newArr
            }
        })
    };

    isPlayedChange = (name) => {
        this.setState({
            isPlayedActive: name
        })
    };

    delGame = (id) => {

        this.setState(({games}) => {

                const idx = this.findIdx(id);
                const newArr = [
                    ...games.slice(0, idx),
                    ...games.slice(idx + 1)
                ];

                return {
                    games: newArr
                }
            }
        )
    };



    findIdx(id) {
        return this.state.games.findIndex((el) => el.id === id);
    }

    sortAbc(a,b) {
        let sortArr = [];
        if( a.title > b.title) { sortArr = 1 }
        if( a.title < b.title) { sortArr = -1 }
        return sortArr
    }


    render(){
        const {games, isPlayedActive, patternStr} = this.state;
        const searchListOfGames =
            this.isPlayedFilter(this.search(games, patternStr), isPlayedActive);

        const sortListOfGames = searchListOfGames.slice().sort(this.sortAbc);

      return (
        <div className="app wrapper">
            <Header
                searchChange={this.searchChange}
            />
            <GameList
                games={sortListOfGames}
                isPlayedChange={this.isPlayedChange}
                isPlayedActive={isPlayedActive}
                isPlayedChangeBtn={this.isPlayedChangeBtn}
                delGame={this.delGame}
            />
        </div>

      );
    }
}

