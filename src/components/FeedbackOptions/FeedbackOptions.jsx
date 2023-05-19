import PropTypes from 'prop-types';
import {Controls, Button} from './FeedbackOptions.styled'


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Controls>
            {options.map((btn) => {
                return (
                    <Button
                        key={btn}
                        type="button"
                        onClick={() => onLeaveFeedback(btn)}>
                        {btn}
                    </Button>
                );
            })}
        </Controls>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}