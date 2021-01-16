import axios from 'axios'
import {popularGamesUrl, newGamesUrl, upcomingGamesUrl, searchGameUrl} from '../api'


//ACTIONS

export const loadGames = () => async (dispatch) =>{
    const popularData = await axios.get(popularGamesUrl())
    const newData = await axios.get(newGamesUrl())
    const upcomingData = await axios.get(upcomingGamesUrl())
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            newGames: newData.data.results,
            upcoming: upcomingData.data.results,
        }
    })

}
export const fetchSearch = (gameName) => async(dispatch)=>{
    const searchGames = await axios.get(searchGameUrl(gameName))

    dispatch({
        type: "FETCH_SEARCHED",
        payload:{
            searched: searchGames.data.results,
        }
    })
}