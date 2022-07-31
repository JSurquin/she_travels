import PropTypes from 'prop-types';

const styles = {
    color: 'red',
};

const Input = ({ register, name, errors, type, title, ...rest }) => {
    if (register) {
        return (
            <div>
                <input
                    title={title}
                    {...register(name)}
                    {...rest}
                    type={type}
                />
                {errors && errors[name]?.message && (
                    <p style={styles}>{errors[name]?.message}</p>
                )}
            </div>
        );
    }
};

Input.propTypes = {
    register: PropTypes.func,
    name: PropTypes.string,
    errors: PropTypes.object,
    type: PropTypes.string,
    title: PropTypes.string,
};

export default Input;
