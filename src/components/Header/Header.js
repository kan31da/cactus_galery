import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <header>
            <h1><Link className="home" to="/">Cactus Galery</Link></h1>
            <nav>
                <Link to="/catalog">All Cactuses</Link>

                <div id="user">

                    <Link to="/create">Add Cactus</Link>
                    <Link to="/logout">Logout</Link>
                </div>



                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>

            </nav>
        </header>
    );
};