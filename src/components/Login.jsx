import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    //above is the method of sending the data to the server, that is why we 
    //are using setUser method to holds the data which we needs to send.

  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>

        <input type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login