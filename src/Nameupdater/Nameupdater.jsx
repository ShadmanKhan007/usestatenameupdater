import React, {useState} from 'react';
import './Nameupdater.css';

export default function Nameupdater() {

    const [name, setName] = useState()
    const  [updateName, setupdateName] = useState()


    function handleChange(event) {
        setName(event.target.value)
    }

    function onSubmit(event){
        event.preventDefault();
        setupdateName(name)
        setName('')

    }

    return (
        <div>
        <h1>Hello {updateName}</h1>
        <input type="text"
         placeholder="Enter your Name"
         onChange={handleChange}
         value={name} />
        <br />
        <br />
        <button onClick={onSubmit}>Submit</button>
        </div>
    )
}