import { Helmet } from "react-helmet-async";
import app from "../../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app)

const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => console.log(error.message));
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out successfully');
                setUser(null)
            })
    };

    console.log(user)

    return (
        <>
            <Helmet>
                <title>Login | Firebase Intro</title>
            </Helmet>

            {
                user
                    ? <button onClick={handleGoogleSignOut}>Sign Out</button>
                    : <><button onClick={handleGoogleSignIn}>google login</button>
                        <button onClick={handleGithubSignIn}>github login</button></>
            }

            {
                user && <>
                    <h1>Name: {user.displayName}</h1>
                    <p>email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </>}
        </>
    );
};

export default Login;