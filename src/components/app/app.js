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
                format: 'psPlus',
                isPlayed: 'noPlayed',
                id: '3'
            },
            {
                title: 'Dark Souls 3 goty',
                by: 'FromSoftware',
                genre: 'action/RPG',
                year: '2017',
                format: 'psPlus',
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
        isPlayed: 'all',
        format: 'all',
        genre: 'all'
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

    genreChange = (e) => {
        this.setState({
            genre: e.target.value
        })
    };

    filterGenre(arr, genre) {
        if(genre === 'all'){
            return arr;
        }
        return arr.filter((el) => el.genre === genre)
    }

    filterChange = (name, typeFilter) => {
        this.setState(() => {
            if(typeFilter === 'isPlayed') return {isPlayed: name};
            if(typeFilter === 'format') return {format: name}
        })
    };

    isPlayedFilter(arr, isPlayed) {
        if(isPlayed === 'all'){
            return arr
        }
       return (
           arr.filter((el) => el.isPlayed === isPlayed)
       )
    }

    formatFilter(arr, format) {
        if(format === 'all'){
            return arr
        }
        return (
            arr.filter((el) => el.format === format)
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
        const {games, genre,  isPlayed, format, patternStr} = this.state;

        const searchListOfGames = this.search(games, patternStr);
        const isPlayedListOfGame = this.isPlayedFilter(searchListOfGames, isPlayed);
        const formatListOfGames = this.formatFilter(isPlayedListOfGame, format);
        const filterListOfGames = this.filterGenre(formatListOfGames, genre);


        const sortListOfGames = filterListOfGames.slice().sort(this.sortAbc);

      return (
        <div className="app wrapper">
            <Header
                searchChange={this.searchChange}
            />
            <GameList
                games={sortListOfGames}
                genreChange={this.genreChange}
                filterChange={this.filterChange}
                isPlayed={isPlayed}
                format={format}
                isPlayedChangeBtn={this.isPlayedChangeBtn}
                delGame={this.delGame}
            />
        </div>

      );
    }
}

