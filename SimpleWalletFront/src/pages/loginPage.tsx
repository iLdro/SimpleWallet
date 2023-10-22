import axios from 'axios';
import Layout from './layout';
import '../css/loginPage.css'

function LoginPage() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value
        };
        alert("Login");
        if (user.email == "" || user.password == "") {
            alert("Please fill all the fields");
            return;
        }
        else {
            user.email = user.email.toString();
            user.password = user.password.toString();
            await axios.post('http://localhost:3000/users/login', user)
                .then(function () {
                    alert("User logged in successfully");
                })
                .catch(function () {
                    alert("Error logging in user");
                });
        }
    }



    return (
        <div>
            <Layout/>
            <h1>Login Page</h1>
            

                <div id="LogInForm">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="email" placeholder='email' />
                        <input type="text" name="password" placeholder='password'/>
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            
        </div>
    );
}

export default LoginPage;