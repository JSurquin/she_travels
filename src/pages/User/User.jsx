import { useContext } from 'react';
import { AuthContext } from '@contexts/auth';
import '@scss/home.scss';

const User = () => {
    const userLogged = useContext(AuthContext);

    return (
        <div className="container mx-auto">
            <p className="text-lg" style={{ fontSize: 25 }}>
                Que cherchez vous,{' '}
                <span className="home__notice">
                    {userLogged?.name.replace(/@.*$/, '')}
                </span>{' '}
                ?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                {new Array(4).fill().map((v, i) => (
                    <div className="card__depart" key={i}>
                        <p>Départs confirmés</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center">
                <h1>
                    Voyage trier par{' '}
                    <span className="text-gray-600">recommandation</span>
                </h1>
                <div className="flex gap-4 flex-wrap justify-center">
                    {new Array(10).fill().map((v, i) => (
                        <div className="card__travel" key={i}>
                            Italie
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default User;
