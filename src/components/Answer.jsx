import PropTypes from 'prop-types';


export default function Answer({ inputMovie, setInputMovie, handleAnswer }) {
    return (
        <div>
            <input type="text" name="" id="" value={inputMovie} 
                onChange={(e) => {
                setInputMovie(e.target.value)
            }} />
            <button onClick={handleAnswer}>Send</button>
        </div>
    )
}

Answer.propTypes = {
    inputMovie: PropTypes.string.isRequired,
    setInputMovie: PropTypes.func.isRequired,
    handleAnswer: PropTypes.func.isRequired
};
