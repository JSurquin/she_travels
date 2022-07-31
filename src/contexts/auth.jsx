import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState('');

    return (
        <AuthContext.Provider
            value={{
                login: login,
                setLogin: setLogin,
                name: name,
                setName: setName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthContextProvider;
