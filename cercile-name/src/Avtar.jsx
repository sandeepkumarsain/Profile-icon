import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import './App.css'

function Avtar() {
    const [profiles, setProfile] = useState([]);
    const [newProfile, setNewProfile] = useState('');
    const [showInput, setShowInput] = useState(false);

    const colors = [
        "#2c3e50",
        "#34495e",
        "#c0392b",
        "#e74c3c",
        "#27ae60",
        "#3498db",
        "#f39c12",
        "#f1c40f",
      ];

    const createProfile = () => {
        if (newProfile.trim()) {
            const firstletter = newProfile.trim().charAt(0).toUpperCase();
            setProfile([...profiles, firstletter]);
            setNewProfile('');
            setShowInput(false);
        }
    };

    const deleteProfile = (index) => {
        const updateProfiles = profiles.filter((_, i) => i !== index);
        setProfile(updateProfiles);
    };

    const toggleInput = () => {
        setShowInput(true)
    };
    const cancleInput = () => {
        setNewProfile('');
        setShowInput(false);
    }

    return (
        <>
            <div className="main">
                {profiles.map((profile, index) => (
                    <div key={index} className="profile">
                        {profile}
                        <span className='deleteicon' onClick={() => deleteProfile(index)}>
                            <RxCross2 />
                        </span>
                    </div>
                ))}
                {!showInput ? (
                    <div className="createProfileButtons" onClick={toggleInput}><IoAdd />

                    </div>
                ) : (<div className="createProfile">
                    <input type="text" placeholder='Enter your Name' value={newProfile} onChange={(e) => setNewProfile(e.target.value)}
                    />
                    <button onClick={createProfile}>Add</button>
                    <button onClick={cancleInput}>Cancel</button>
                </div>


                )}
            </div>

        </>
    )
}

export default Avtar