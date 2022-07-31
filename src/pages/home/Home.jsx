import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { loginSchema } from '../../validation';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

const Home = () => {
    const [data, setData] = useState();
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors, isValid, isSubmitted },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
    });

    const styles = {
        color: 'red',
        display: 'flex',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const onSubmit = (data) =>
        setTimeout(() => {
            setData(data.email);
            reset({
                ...getValues(),
            });
        }, 2000);

    return (
        <div style={formStyle}>
            <div>
                <p>
                    Entrez votre email pour que nous puissons vous reconnaitre !
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={styles}>
                    <Input register={register} name="email" />
                    <Button
                        type="submit"
                        isValid={isValid}
                        isSubmitted={isSubmitted}
                    >
                        Hello
                    </Button>
                </div>
                {errors.email?.message && (
                    <span style={styles}>{errors.email?.message}</span>
                )}
                {data && (
                    <p>
                        Welcome back{' '}
                        <span style={{ fontWeight: 'bold' }}>
                            {data?.replace(/@.*$/, '')}
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};
export default Home;
