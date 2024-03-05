import PropTypes from 'prop-types';
import '../styled-component/gameResultScreen.scss';


export default function GameResultScreen({result}) {
    const backgroundColor = result === 'GAME OVER' ? '#cb5641c6' : result === 'YOU WIN' ? '#41cb5fc6' : 'gray' ;

    return (
        <div className="game-result" style={{backgroundColor}}>
            <h1>{result}</h1>
        </div>
    )
}

GameResultScreen.propTypes = {
    result: PropTypes.string.isRequired,
};
