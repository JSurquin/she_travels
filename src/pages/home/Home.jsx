import Form from '@components/Form/Form';
import Input from '@components/Input/Input';
import { loginSchema } from '@src/validation';
import '@scss/home.scss';
import { useContext } from 'react';
import { AuthContext } from '@contexts/auth';
import User from '../User/User';

const Home = () => {
    let auth = useContext(AuthContext);

    const onSubmit = (data) =>
        setTimeout(() => {
            auth.setName(data.email);
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
                <Form
                    onSubmit={onSubmit}
                    validationSchema={loginSchema}
                    submitMessage="Hello"
                >
                    <Input name="email" />
                </Form>
                {auth.name && (
                    <p>
                        Bonjour{' '}
                        <span className="home__notice">
                            {' '}
                            {auth.name.replace(/@.*$/, '')}
                        </span>
                    </p>
                )}
            </div>
        );
    } else if (auth.login) {
        return <User />;
    }
};

export default Home;
