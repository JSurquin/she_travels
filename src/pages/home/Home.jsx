import Form from '@components/Form/Form';
import Input from '@components/Input/Input';
import { loginSchema } from '@src/validation';
import { useState } from 'react';
import '@scss/home.scss';

const Home = () => {
    const [email, setEmail] = useState();

    const onSubmit = (data) =>
        setTimeout(() => {
            setEmail(data?.email);
        }, 2000);

    return (
        <div className="home__content">
            <Form
                onSubmit={onSubmit}
                validationSchema={loginSchema}
                submitMessage="Hello"
            >
                <Input name="email" />
            </Form>
            {email && (
                <p>
                    Bonjour{' '}
                    <span className="home__notice">
                        {' '}
                        {email.replace(/@.*$/, '')}
                    </span>
                </p>
            )}
        </div>
    );
};

export default Home;
