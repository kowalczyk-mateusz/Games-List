//MAIN API URL
const baseUrl = `https://api.rawg.io/api/`


//DATE
//MONTH
const getCurrentMonth = ()=>{
    const month = new Date().getMonth()+1
    if(month < 10){
        return `0${month}`
    }
    else{
        return month;
    }
    
}
//DAY
const getCurrentDay = () =>{
    const day = new Date().getDate()
    if(day < 10){
        return `0${day}`
    }
    else{
        return day
    }

}
// CURRENT DATES
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//popular
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`
export const popularGamesUrl = () => `${baseUrl}${popularGames}`
export const upcomingGamesUrl = () =>`${baseUrl}${upcomingGames}`
export const newGamesUrl = () => `${baseUrl}${newGames}`
export const gameScreenshotUrl = (gameId) => `${baseUrl}games/${gameId}/screenshots`
export const gameDetailsUrl = (gameId) => `${baseUrl}games/${gameId}`

export const searchGameUrl = (gameName) => `${baseUrl}games?search=${gameName}&page_size=9`