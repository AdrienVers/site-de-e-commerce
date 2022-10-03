import React, { useState } from 'react';
import { storage } from '../firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function Contact() {
    const [progress, setProgress] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = e.target[0].files[0];
        uploadFiles(data);
    };

    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) =>
                    console.log(url)
                );
            }
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" name="picture" />
                <button>Valider</button>
            </form>
            <h3>Chargement {progress} %</h3>
        </div>
    );
}

export default Contact;
