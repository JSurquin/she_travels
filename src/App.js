import { useContext } from 'react';
import './App.scss';
import { AuthContext } from '@contexts/auth';
import Navbar from '@components/Navbar/Navbar';
import Header from '@components/Header/Header';

function App() {
    const auth = useContext(AuthContext);
    document.body.style.backgroundColor = 'lightgray';
    return (
        <>
            {auth.login && (
                <>
                    <Navbar />
                    <Header />
                </>
            )}
        </>
    );
}

export default App;
