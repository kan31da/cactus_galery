import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    email: 'email',
    password: 'password'
};

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext)

    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.email]: '',
        [LoginFormKeys.password]: '',
    }, onLoginSubmit);

    return (

        <section id="loginaPage">
            <form method="POST" onSubmit={onSubmit} className="loginForm">
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="some email"
                        name={LoginFormKeys.email}
                        value={values[LoginFormKeys.email]}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="********"
                        name={LoginFormKeys.password}
                        value={values[LoginFormKeys.password]}
                        onChange={changeHandler} />
                </div>

                <button className="btn" type="submit">Login</button>

                <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </form>
        </section >
    );
}