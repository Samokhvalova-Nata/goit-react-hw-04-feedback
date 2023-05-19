import PropTypes from 'prop-types';
import {Sect, Title} from './Section.styled'

export const Section = ({ title, children }) => {
    return (
        <Sect>
            <Title>{title}</Title>
            {children}
        </Sect>
    )
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}