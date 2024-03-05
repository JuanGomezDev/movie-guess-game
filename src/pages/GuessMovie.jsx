import { useEffect, useState } from 'react';
import moviesData from '../data/movies.data.json';
import './guessMovie.scss';
import Answer from '../components/Answer';
import GameResultScreen from '../components/GameResultScreen';


export default function GuessMovie() {
    const movies = moviesData.movies;

    const [lives, setLives] = useState(3);
    const [points, setPoints] = useState(0);
    const [inputMovie, setInputMovie] = useState('');
    const [currentMovie, setCurrentMovie] = useState({});
    const [gameResult, setGameResult] = useState(false);
    const [resultText, setResultText] = useState('');

    // Funcion para obtener una posicion aleatoria de un array
    function random(arrLength) {
        let max = arrLength - 1;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // Posicion aleatoria del array movies
    const randomMovieIndex = random(movies.length);

    // Al llegar a 0 vidas mostrar GAME OVER
    useEffect(() => {
        if (lives === 0) {
            setGameResult(true);
            setResultText('GAME OVER')
        }
    }, [lives]);

    // Al llegar a cierta cantidad de puntos mostrar YOU WIN
    useEffect(() => {
        if (points === 10) {
            setGameResult(true);
            setResultText('YOU WIN')
        }
    }, [points])

    // Poner, cambiar pelicula
    useEffect(() => {
        setCurrentMovie(movies[randomMovieIndex]);
    }, [movies])


    // Validaciones de puntos y vidas
    const handleAnswer = () => {
        const capitalCurrentMovie = currentMovie.name.toUpperCase();
        const capitalInputMovie = inputMovie.toUpperCase();

        capitalInputMovie === capitalCurrentMovie
            ? setPoints((prePoints) => prePoints + 1)
            : setLives((preLives) => preLives - 1)
            ;

        setCurrentMovie(movies[randomMovieIndex])
        setInputMovie('');
    }

    // Lo he dejado para saber cual es la pelicula!
    console.log(currentMovie);

    return (
        <>
            {gameResult && <GameResultScreen result={resultText} />}

            <header>
                <h2>Lives: {lives}</h2>
                <h2>Points: {points}</h2>
            </header>

            <main>
                <h1>Guess the Movie</h1>
                <span>{currentMovie && currentMovie.emojis}</span>

                <Answer inputMovie={inputMovie} setInputMovie={setInputMovie} handleAnswer={handleAnswer} />
            </main>
        </>
    )
}
