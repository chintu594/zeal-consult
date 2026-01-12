import React, { useState } from 'react';

const UserAdd = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const createUser = async (e) => {
        e.preventDefault();
        console.log({ name, age, email })
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, age, email })
        });

        if (response.ok) {
            alert("User Added");
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Add User</h1>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter name" />
                <br /><br />
                <input type="text" onChange={(e) => setAge(e.target.value)} placeholder="enter age" />
                <br /><br />
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="enter email" />
                <br /><br />
                <button type="button" onClick={createUser}>Add User</button>
            </form>
        </div>
    );
};

export default UserAdd;
