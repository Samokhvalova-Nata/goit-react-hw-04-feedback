import PropTypes from 'prop-types';
import {StatisticList, Text, Value, TotalStats} from './Statistics.styled'


export const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticList>
            <Text>Good: <Value>{good}</Value></Text>
            <Text>Neutral: <Value>{neutral}</Value></Text>
            <Text>Bad: <Value>{bad}</Value></Text>
            <TotalStats>Total: <Value>{total}</Value></TotalStats>
            <TotalStats>Positive feedback: <Value>{positivePercentage}%</Value></TotalStats>
        </StatisticList>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}