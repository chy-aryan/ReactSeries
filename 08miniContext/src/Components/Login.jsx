import React, { useState, useContext } from 'react'
import usercontext from '../Context/usercontext'

function login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = usestate('')

    const {setuser} = usecontext(usercontext)

    const handlesubmit = (e) => {
        e.preventDefault()

        setuser({username , password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input type='text'
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder='username' />;

                {"  "}
               <input type="text"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder='password' />

            <button onClick={handlesubmit}>Submit</button>

        </div>

    )
}

export default login