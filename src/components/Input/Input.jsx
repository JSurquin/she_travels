import PropTypes from 'prop-types';
import '@scss/home.scss';
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
                    <p className="home__errors">{errors[name]?.message}</p>
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
