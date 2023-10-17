function register() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {
            username: event.currentTarget.username.value,
            mail: event.currentTarget.mail.value,
            password: event.currentTarget.password.value
        };
        alert("Register");
        if (user.username == "" || user.mail == "" || user.password == "") {
            alert("Please fill all the fields");
            return;
        }
        else {
            user.username = user.username.toString();
            user.mail = user.mail.toString();
            user.password = user.password.toString();
        }
    }

    return(
        <div>
            <h1> Register Page</h1>


                <div id="RegisterForm">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder='username' />
                        <input type="text" name="mail" placeholder='mail' />
                        <input type="text" name="password" placeholder='password'/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            
        </div>
    );
}


export default register;