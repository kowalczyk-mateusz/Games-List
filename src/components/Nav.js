import React, {useState} from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import logo from '../img/logo.svg'
import {fetchSearch} from '../actions/gamesAction'
import {useDispatch} from 'react-redux'
import {fadeIn} from '../animations'


const Nav = () =>{

    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState('');
    const inputHandler = (e)=>{
            setTextInput(e.target.value)
    }

    const submitSearch = (e)=>{
        e.preventDefault()
        if(textInput.length === 0){
            return null;
        }
        else{

        dispatch(fetchSearch(textInput))
        setTextInput('')
                    
    }
    }
    const clearchSerched = () =>{
        dispatch({type: 'CLEAR_SEARCHED'})
    }

    return(
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <Logo onClick={clearchSerched}>
                <img src={logo} alt="logo"/>
                <h1>Games list</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
padding: 3rem 5rem;
text-align: center;
@media (max-width: 700px){

padding: 3rem 0.5rem;

}
input{
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.1);

}
@media (max-width: 700px){
    .search{
        display: flex;
        align-items: center;
        justify-content: center;
                button{
            height: fit-content;
            padding: 0.5rem 0.5rem;
        }
        input{
            width: 80%;
            margin: 0;
        }
    }


    }
button{
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
}
`

const Logo = styled(motion.div)`
display: flex;
justify-content: center;
padding: 1rem;
cursor: pointer;
img{
    height: 2rem;
    width: 2rem;
}
`
export default Nav