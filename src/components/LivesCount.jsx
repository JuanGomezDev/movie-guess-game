import PropTypes from 'prop-types';


export default function LivesCount({lives}) {
    return (
        <h2>Lives: {lives}</h2>
    )
}


LivesCount.propTypes = {
    lives: PropTypes.number.isRequired,
};