import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const SignIn = () => {
    const [user, setUser] = useState({})
    const history = useHistory();
    const handleUserDetails = (e) => {
        setUser(() => (
            {
                ...user,
                [e.target.name]: e.target.value
            }
        ))
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        if(!user.username || !user.password) return
        await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // credentials: 'include',
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            })
        })
        await  history.push('/dashboard')

    }
    return (
        <div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleLogin}>
                <h1 className="h3 mb-3 fw-normal text-center">Please Login</h1>

                <div className="form-floating">
                    <label htmlFor="floatingInput">Username</label>
                    <input name="username" type="text" className="form-control" id="floatingInput" placeholder="username" required onChange={handleUserDetails}/>
                </div>
                <div className="form-floating mt-4">
                    <label htmlFor="floatingPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={handleUserDetails}/>
                </div>
                <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">Login</button>
                </form>
            </main>
        </div>
    )
}

export default SignIn