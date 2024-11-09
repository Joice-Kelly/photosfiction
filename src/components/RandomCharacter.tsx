import { useEffect, useState } from "react";
import { charactersData } from "../data/characterData";
import { Character } from "../data/characters";
import styles from '../App.module.css';

function getRandomCharacter(): Character { 
    const randomIndex = Math.floor(Math.random() * charactersData.length); 
    return charactersData[randomIndex]; }

function RandomCharacter(){
    const [character, setCharacter] = useState<Character>(getRandomCharacter());

    useEffect(() => {
        setCharacter(getRandomCharacter())
    }, [])

    return ( 
        <div className={styles.container}> 
        <img src={character.imageUrl} alt={character.name} /> 
        <h1 className={styles.title}>{character.name}</h1> 
        <div className={styles.label}> {character.description.split("\n\n").map((paragraph, index) => ( <p key={index}>{paragraph}</p> ))} 
        </div>   
    </div> 
    ); 
    }

    export default RandomCharacter;