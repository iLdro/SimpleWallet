import axios from "axios";
import Layout from "./layout";
import "../css/registerPage.css"
function registerPage() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {
            userName: event.currentTarget.username.value,
            email: event.currentTarget.mail.value,
            password: event.currentTarget.password.value
        };
        if (user.userName == "" || user.email == "" || user.password == "") {
            alert("Please fill all the fields");
            return;
        }
        else {
            user.userName = user.userName.toString();
            user.email = user.email.toString();
            user.password = user.password.toString();
            try {
                await axios.post('http://localhost:3000/users/register', user)
                alert("User registered successfully");
            } catch (error) {
                alert("Error registering user");
            }
        }
    }

    return(
        <div>
            <Layout/>
            <h1> Register Page</h1>


                <div id="RegisterForm">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder='username' />
                        <input type="text" name="mail" placeholder='mail' />
                        <input type="text" name="password" placeholder='password'/>
                        <button id = "RegisterButton"type="submit">Submit</button>
                    </form>
                </div>
            
        </div>
    );
}


export default registerPage;