const Header = () => {
    return (
        <div className="header">
            <div className="header-overlay"></div>
            <div className="z-50">
                <h1 style={{ fontSize: 36 }} className="text-center">
                    Prend tes clics et tes clacs !
                </h1>
                <h2 style={{ fontSize: 24 }} className="text-center">
                    et tes rêves et ta vie !
                </h2>
                <div
                    style={{ background: 'rgba(255,255,255, 0.5)' }}
                    className="flex mt-8 w-full justify-center absolute bottom-0"
                >
                    <div className="p-2">
                        <input
                            placeholder="Destination (continent, pays, région, etc.)"
                            style={{ width: 300 }}
                            className="outline-0 border-0	p-4 rounded-md mx-2"
                        ></input>
                        <input
                            placeholder="Date de départ"
                            style={{ width: 300 }}
                            className="outline-0 border-0 p-4 rounded-md"
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
