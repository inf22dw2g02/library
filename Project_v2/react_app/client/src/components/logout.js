import  { GoogleLogout } from 'react-google-login';

const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

function Logout() {

    const onSuccess = () => {
        console.log("LOG OUT SUCCESSFULL!");
    }
    

    
    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
export default Logout;