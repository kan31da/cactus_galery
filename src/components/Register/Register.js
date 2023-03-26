import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (

        <section id="registerPage">
            <form className="registerForm" method="post" onSubmit={onSubmit} >
                <h2>Register</h2>
                <div className="on-dark">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="some email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                </div>

                <div className="on-dark">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        value={values.password}
                        onChange={changeHandler}

                    />
                </div>

                <div className="on-dark">
                    <label htmlFor="confirmPassword">Repeat Password:</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="********"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />
                </div>

                <button className="btn" type="submit">Register</button>

                <p className="field">
                    <span>If you already have profile click <Link to="/login">here</Link></span>
                </p>
            </form>
        </section >

    );
};