import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {

    const { isAuthenticated, userEmail } = useContext(AuthContext)


    return (
        <header>
            <h1><Link className="home" to="/">Cactus Galery</Link></h1>
            <nav>
                <Link to="/catalog">All Cactuses</Link>


                {isAuthenticated && (
                    <div id="user">

                        <Link to="/create">Add Cactus</Link>
                        <Link to="/logout">Logout</Link>
                        <Link to="/profile">{userEmail}</Link>
                    </div>

                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}

            </nav>
        </header>
    );
};