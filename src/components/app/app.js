import React, {Component} from 'react';
import './app.scss';
import Header from "../header";
import GameList from "../game-list";
import Server from "../../server";

export default class App extends Component{
    server = new Server();
    state={
        games: [],
        patternStr: '',
        isPlayed: 'all',
        format: 'all',
        genre: 'all',
        error: 'false',
        loading: 'true'
    };

    async componentDidMount() {
        try{
            const gameList = await this.server.getGameList();
            this.setState( {games: gameList, loading: false, error: false});
        } catch (e) {
            this.setState({error: true, loading: false});
        }
    }

    addNewGame =  (newGame) => {
        this.setState( ({games}) => {
            const newArrGames = games.concat(newGame);
            return {
                games: newArrGames
            }
        })
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

    isPlayedChangeInState = async (game) => {
        const id = game.id;
        try{
           await this.server.isPlayedChange(game)
        } catch (e) {
            console.log(e)
        }
        this.setState(({games}) => {
            const idx = this.findIdx(id);
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

    delGameInState = (id) => {
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
        const {games, genre,  isPlayed, format, error, loading, patternStr} = this.state;

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
                addNewGame={this.addNewGame}
                games={sortListOfGames}
                genreChange={this.genreChange}
                filterChange={this.filterChange}
                isPlayed={isPlayed}
                format={format}
                error={error}
                loading={loading}
                isPlayedChangeInState={this.isPlayedChangeInState}
                delGameInState={this.delGameInState}
            />
        </div>

      );
    }
}

