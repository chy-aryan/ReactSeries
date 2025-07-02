import React  , {useContext} from 'react'
import usercontext from '../Context/usercontext'

function profile() {
    const {user} = usecontext(usercontext)

    if (!user) return <div>Please Log in</div>

    return <div>Welcome {user.username} </div>
 
}

export default profile