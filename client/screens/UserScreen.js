import {React, useState, useEffect} from 'react';
import { View } from 'react-native'
import UserDetail from '../components/UserDetail';
import UserModal from '../components/UserModal';


const UserScreen = ({user, setUser, handleLogout}) => {

    // const [user, setUser] = useState("");
    // // const [editUser, setEditUser] = useState(false);

    // useEffect(() => {
    //     getUserData()
    //     .then((userData) => {
    //         setUser(userData)
    //     })
    // }, [])

    const setUpdatedUser = (user) => {
        setUser(user)
    }

    return (
        <View>
            <UserDetail user={user}/>
            <UserModal user={user} setUpdatedUser={setUpdatedUser} handleLogout={handleLogout}/>
        </View>
    )   
}

export default UserScreen;