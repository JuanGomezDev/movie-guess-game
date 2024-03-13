import PropTypes from 'prop-types';


export default function PointsCount({points}) {
    return (
        <h2>Points: {points}</h2>
    )
}


PointsCount.propTypes = {
    points: PropTypes.number.isRequired,
};