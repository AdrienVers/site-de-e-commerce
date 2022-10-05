import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { data } from '../firebase-config';

function AddToDo() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== '') {
            await addDoc(collection(data, 'todos'), {
                title,
                completed: false,
            });
            setTitle('');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter todo..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddToDo;
