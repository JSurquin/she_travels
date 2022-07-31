import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { loginSchema } from '@src/validation';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import '@scss/home.scss';

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

    const onSubmit = (data) =>
        setTimeout(() => {
            setData(data.email);
            reset({
                ...getValues(),
            });
        }, 2000);

    return (
        <div className="home__content">
            <div>
                <p>
                    Entrez votre email pour que nous puissons vous reconnaitre !
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="home__form">
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
                    <span className="home__errors">
                        {errors.email?.message}
                    </span>
                )}
                {data && (
                    <p>
                        Welcome back{' '}
                        <span className="home__notice">
                            {data?.replace(/@.*$/, '')}
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};
export default Home;
