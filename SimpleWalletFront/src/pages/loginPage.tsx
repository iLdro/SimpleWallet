import '../css/loginPage.css'

function LoginPage() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {
            username: event.currentTarget.username.value,
            password: event.currentTarget.password.value
        };
        alert("Login");
        if (user.username == "" || user.password == "") {
            alert("Please fill all the fields");
            return;
        }
        else {
            user.username = user.username.toString();
            user.password = user.password.toString();
        }
    }



    return (
        <div>
            <h1>Login Page</h1>
            

                <div id="LogInForm">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder='username' />
                        <input type="text" name="password" placeholder='passworld'/>
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            
        </div>
    );
}

export default LoginPage;