import { useEffect, useState } from 'react';
import moviesData from '../data/movies.data.json';
import './guessMovie.scss';
import Answer from '../components/Answer';
import GameOver from '../components/GameOver';


export default function GuessMovie() {
    const movies = moviesData.movies;

    const [lives, setLives] = useState(3);
    const [points, setPoints] = useState(0);
    const [inputMovie, setInputMovie] = useState('');
    const [currentMovie, setCurrentMovie] = useState();
    const [gameOver, setGameOver] = useState(false);

    // Al llegar a 0 vidas, activar componente GameOver
    useEffect(() => {
        if (lives === 0) {
            setGameOver(true);
        }
    }, [lives]);

    // Validaciones de puntos y vidas
    const handleAnswer = () => {
        const capitalCurrentMovie = currentMovie.name.toUpperCase();
        const capitalInputMovie = inputMovie.toUpperCase();

        capitalInputMovie === capitalCurrentMovie 
            ? setPoints((prePoints) => prePoints + 1) 
            : setLives((preLives) => preLives - 1)
        ;

        setCurrentMovie(movies[randomMovieIndex])
    }

    useEffect(() => {
        setCurrentMovie(movies[randomMovieIndex]);
    }, [movies])
    
    
    function random(arrLength) {
        let max = arrLength-1;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomMovieIndex = random(movies.length);
    
    console.log(currentMovie);
    return (
        <>
        {gameOver && <GameOver />}
        
        <header>
            <h2>Lives: {lives}</h2>
            <h2>Points: {points}</h2>
        </header>

        <main>
            <h1>Guess the Movie</h1>
            <span>{currentMovie && currentMovie.emojis}</span>

            <Answer inputMovie={inputMovie} setInputMovie={setInputMovie} handleAnswer={handleAnswer}/>
        </main>
        </>
    )
}
