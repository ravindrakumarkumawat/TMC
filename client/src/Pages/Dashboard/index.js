import { useContext } from 'react'
import { AuthContext } from '../../Context/Authentication/AuthProvider'
const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            Hey User, you are {user.username}
        </div>
    )
}

export default Dashboard