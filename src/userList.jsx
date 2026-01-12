import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function userList() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getUserData();
    }, [])
    const getUserData = async () => {
        const url = 'http://localhost:3000/users';
        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
        setLoading(false);
    }

    console.log(userData);
    return (
        <div>
           
            {!loading ?
                userData && userData.map((user, index) => (
                    <React.Fragment key={index + 1}>
                        <h1>{user.name}</h1>
                    </React.Fragment>
                )) : <h1>..data loading</h1>
            }
        </div>
    )
}

export default userList