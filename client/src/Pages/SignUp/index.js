import { useState } from 'react'
import { useHistory } from 'react-router-dom';
const SignUp = () => {
    const history = useHistory();
    const [user, setUser] = useState({})
    const handleUserDetails = (e) => {
        setUser(() => (
            {
                ...user,
                [e.target.name]: e.target.value
            }
        ))
    }
    const handleRegister = async (e) => {
        e.preventDefault()
        if(!user.username || !user.password) return
        await fetch('https://ravindrakumarkumawat-improved-adventure-4qj6wxr7rr5cj9j6-3001.preview.app.github.dev/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              username: user.username,
              password: user.password,
            })
          })
    
        
        await  history.push('/signin')
    }
    return (
        <div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleRegister}>
                <h1 className="h3 mb-3 fw-normal text-center">Please Register</h1>

                <div className="form-floating">
                    <label htmlFor="floatingInput">Username</label>
                    <input name="username" type="text" className="form-control" id="floatingInput" placeholder="Username" required onChange={handleUserDetails}/>
                </div>
                <div className="form-floating mt-4">
                    <label htmlFor="floatingPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={handleUserDetails}/>
                </div>
                <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">Register</button>
                </form>
            </main>
        </div>
    )
}

export default SignUp