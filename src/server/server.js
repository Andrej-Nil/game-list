import axios from 'axios';

export default class Server {
    _baseApi = 'https://game-list-fa57c.firebaseio.com';

    async getCounter(){
        const response = await axios.get(`${this._baseApi}/counter.json`);
        return response.data;
    }

    updateCounter = async (counter) => {
        await axios.put(`${this._baseApi}/counter.json`, counter)
    };

    async getGameList(){
        const response = await axios.get(`${this._baseApi}/games.json`);
        const data = response.data;
        return this._transformGameList(data);
    }

    _transformGameList(data){
        const gameList = [];
        Object.keys(data).forEach((key) =>{
            data[key].keyGame = key;
            data.key = key;
            gameList.push(data[key]);

        });
        return gameList
    }

     postGame = async (newGame) => {
        const response = await axios.post(`${this._baseApi}/games.json`, newGame);
        return response.data.name
     };

    deleteGame = async (keyGame) => {
        await axios.delete(`${this._baseApi}/games/${keyGame}.json`)
    };

    isPlayedChange = async (game) => {
        const {keyGame, ...test} = game;
        await axios.put(`${this._baseApi}/games/${keyGame}.json`, test);
    }
}
