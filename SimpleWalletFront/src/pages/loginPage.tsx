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
        if (user.email == "" || user.password == "") {
            alert("Please fill all the fields");
            return;
        }
        else {
            user.email = user.email.toString();
            user.password = user.password.toString();
            try {
                const response = await axios.post('http://localhost:3000/users/login', user)
                const token = response.data.token;
                const userId = response.data.userId;
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                
                window.location.reload();
                window.location.href = "http://localhost:5173/addPayment";
            } catch (error) {
                alert("Error logging in user");
            }
        }
    }



    return (
        <div>
            <Layout/>
            <div id="login">

                <h1>Log in</h1>
                

                    <div id="LogInForm">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="email" placeholder='email' />
                            <input type="password" name="password" placeholder='password'/>
                            <button id="LoginButton" type="submit" >Submit</button>
                        </form>
                    </div>
            </div>
            
        </div>
    );
}

export default LoginPage;