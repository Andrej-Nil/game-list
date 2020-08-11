import axios from 'axios';

export default class Server {
    _baseApi = 'https://game-list-fa57c.firebaseio.com';

    async getCounter(){
        const response = await axios.get(`${this._baseApi}/counter.json`);
        return response.data;
    }

    updateCounter = (counter) => {
        axios.put(`${this._baseApi}/counter.json`, counter)
    };

    async getGameList(){
        const response = await axios.get(`${this._baseApi}/games.json`);
        return this._transformGameList(response.data);
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
        const response = await axios.post('https://game-list-fa57c.firebaseio.com/games.json', newGame);
        return response.data.name
    }
}
