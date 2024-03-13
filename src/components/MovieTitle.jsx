import PropTypes from 'prop-types';


export default function MovieTitle({currentMovie}) {
    return (
        <span>{currentMovie && currentMovie.emojis}</span>
    )
}

MovieTitle.propTypes = {
    currentMovie: PropTypes.object.isRequired,
};