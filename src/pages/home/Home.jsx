import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { loginSchema } from '@src/validation';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import '@scss/home.scss';
import { AuthContext } from '@contexts/auth';
import User from '../User/User';

const Home = () => {
    let auth = useContext(AuthContext);

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
            auth.setName(data.email);
            reset({
                ...getValues(),
            });
            auth.setLogin(true);
        }, 2000);

    if (!auth.login) {
        return (
            <div className="home__content">
                <div>
                    <p>
                        Entrez votre email pour que nous puissons vous
                        reconnaitre !
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="home__form">
                        <div className="home__form__content">
                            <Input register={register} name="email" />
                            <Button
                                type="submit"
                                isValid={isValid}
                                isSubmitted={isSubmitted}
                            >
                                Hello
                            </Button>
                        </div>
                        <div>
                            {errors.email?.message && (
                                <span className="home__errors">
                                    {errors.email?.message}
                                </span>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        );
    } else if (auth.login) {
        return <User />;
    }
};
export default Home;
