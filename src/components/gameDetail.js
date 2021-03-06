import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import nintendo from '../img/nintendo.svg'
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import starempty from '../img/starempty.png'
import starfull from '../img/starfull.png'

const GameDetail = ({pathId}) =>{


    const history = useHistory()

    const exitDetailHandler = (e)=>{
        const element = e.target
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }

    const getPlatform = (platform) =>{
        switch(platform){
            case 'PlayStation 4':
                return playstation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;
    
        }
    }

    const getStars = () =>{
        const stars = []
        const rating = Math.floor(game.rating)

        for(let i = 1;i<=5;i++){
            if(i <= rating){
                stars.push(<img src={starfull} key={i} alt='star'></img>)
            }
            else{
                stars.push(<img src={starempty} key={i} alt='star'></img>)
            }
        }
        return stars
        
    }

    const {screen, game, isLoading} = useSelector((state)=> state.detail)

    return(
<>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
        <p>Rating: {game.rating}</p>
                        {getStars()}
                        
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                    <Platforms>
                        {game.platforms.map(data=>(
                            <img key={data.platform.id} alt={data.platform.name} src={getPlatform(data.platform.name)}></img>
                        ))}
                    </Platforms>
                    </Info>

                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image}/>
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen =>(
                        <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image}/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
        )

}

const CardShadow = styled(motion.div)`
width: 100%;
min-height: 100vh;
background: rgba(0,0,0,0.5);
overflow-y: scroll;
position: fixed;
top: 0;
left: 0;
z-index: 999;
&::-webkit-scrollbar{
width: 0.5rem;
}
&::-webkit-scrollbar-thumb{
background-color: #ff7676;
}
&::-webkit-scrollbar-track{
background-color: white;
}
`
const Detail = styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 5rem;
background: white;
position: absolute;
left: 10%;
color: black;
@media (max-width: 700px){
    padding: 2rem 0.5rem;
}
img{
    width: 100%;
}

`

const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 700px){
    flex-direction: column;
}
.rating{
    img{
        display: inline;
        width: 2rem;
        height: 2rem;
    }
}
`

const Info = styled(motion.div)`
text-align: center;
`

const Platforms = styled(motion.div)`
display: flex;
justify-content: space-evenly;
img{
    margin-left: 3rem;
}
@media (max-width: 700px){
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    img{
        width: 3rem;
        height: 3rem;
        margin: 0rem 0.5rem
    }
}


`

const Media = styled(motion.div)`
margin-top: 5rem;
img{
    width: 100%;
}
`

const Description = styled(motion.div)`
margin: 5rem 0rem;
@media (max-width: 700px){
   p{
       line-height: 1.5rem;
   }
}

`

export default GameDetail