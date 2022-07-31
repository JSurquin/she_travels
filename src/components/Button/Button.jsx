import PropTypes from 'prop-types';

const Button = ({ type, isValid, children, isSubmitted }) => {
    return (
        <button type={type} disabled={!isValid || isSubmitted}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isValid: PropTypes.bool,
    isSubmitted: PropTypes.bool,
};

export default Button;
