import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate()

    const [auth, setAuth] = useSessionStorage('userData', {});
    // const [auth, setAuth] = useState({});
    const authService = authServiceFactory(auth.accessToken)


    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data)
            setAuth(result)

        } catch (error) {

            console.log(error);
        }

        navigate("/Catalog")
    }

    const onRegisterSubmit = async (values) => {

        const { confirmPassword, ...registerData } = values;

        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData)

            setAuth(result)

        } catch (error) {

            console.log(error);
        }

        navigate("/Catalog")
    }

    const onLogout = async () => {

        //TODO

        try {
            await authService.logout()

        } catch (error) {

            console.log(error);
        }

        setAuth({});
    }



    const contex = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    }


    return (
        <>
            <AuthContext.Provider value={contex}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

// export const useAuthContext = () => {
//     const contex = useContext(AuthContext)

//     return contex;
// }