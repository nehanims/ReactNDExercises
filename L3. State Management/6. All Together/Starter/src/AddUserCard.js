import React, { useState } from "react";

const NameInput = ({ id, placeholder, value, onChange }) => {

    return (
        <div >
            <label htmlFor={id}>{placeholder}</label>
            <input type="text" placeholder={placeholder} id={id} value={value} onChange={onChange} />
        </div>
    )
};

const AddUser = ({ addUser }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");

    const handleChange = (setter) =>
        e => setter(e.target.value);

    const handleAddUser = e => {
        addUser({ username, firstname, lastname });
    };

    return (
        <form className="user-add">
            <NameInput id="first" placeholder="First" value={firstname} onChange={handleChange(setFirstname)} />
            <NameInput id="last" placeholder="Last" value={lastname} onChange={handleChange(setLastname)} />
            <NameInput id="username" placeholder="Username" value={username} onChange={handleChange(setUsername)} />
            <button onClick={handleAddUser} disabled={firstname.length === 0 || lastname.length === 0 || username.length === 0}>Add</button>
        </form>
    );
};

export default AddUser;