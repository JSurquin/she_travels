import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createElement, useEffect } from 'react';
import Button from '@components/Button/Button';
import PropTypes from 'prop-types';
import '@scss/form.scss';

const Form = ({ children, validationSchema, onSubmit, submitMessage }) => {
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors, isValid, isSubmitted },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        if (isSubmitted) {
            setTimeout(() => {
                reset({
                    ...getValues(),
                });
            }, 2000);
        }
    }, [isSubmitted, reset, getValues]);

    return (
        <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
            {Array.isArray(children)
                ? children.map((child) => {
                      return createElement(child.type, {
                          ...{
                              ...child.props,
                              register,
                              key: child.props.name,
                              errors: errors,
                          },
                      });
                  })
                : createElement(children.type, {
                      ...{
                          ...children.props,
                          register,
                          key: children.props.name,
                          errors: errors,
                      },
                  })}
            <Button type="submit" isValid={isValid} isSubmitted={isSubmitted}>
                {submitMessage}
            </Button>
        </form>
    );
};

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
    submitMessage: PropTypes.string,
};

export default Form;
