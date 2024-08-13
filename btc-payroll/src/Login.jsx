import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
require('dotenv').config();

const Login = () => {
    return (
        <Auth0Provider
        domain=''
        clientId='xAzQPIrXhjeLUzvJnnTrLoLJ-WAadpGxLHAjAzqFlfo'
        redirectUri='https://david-curtin.com/'>
            <Authenticated />
        </Auth0Provider>
    )
}

const Authenticated = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0(); 

    return (
        <div>
            {isAuthenticated ? 
            (
                <div>{user.name}
                <button onClick={() => logout()}>Logout</button>
                </div>
            ) :  (
                <button onClick={() => loginWithRedirect()}>Login</button>
            )}
        </div>
    )
};

export default Login;