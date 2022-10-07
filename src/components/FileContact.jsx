import React, { useState, useEffect, useRef } from 'react';
import './filecontact.css';

function FileContact(props) {
    const [file, setFile] = useState();
    const [previewURL, setPreviewURL] = useState();
    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewURL(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }, [file]);

    function pickedHandler(e) {
        let pickedFile;
        if (e.target.files && e.target.files.lenght === 1) {
            pickedFile = e.target.files[0];
            setFile(pickedFile);
        }
    }

    function pickedFileHandler() {
        filePickerRef.current.click();
    }

    return (
        <div>
            <input
                id={props.id}
                ref={filePickerRef}
                type="file"
                style={{ display: 'none' }}
                accept=".jpg, .png, .jpeg"
                onChange={pickedHandler}
            ></input>
            <div className="file-uppload-preview">
                <img src={previewURL} alt="preview" />
                {previewURL && <img src={previewURL} alt="preview" />}
                {!previewURL && (
                    <div className="center">
                        <button
                            className="file-upload-button"
                            onClick={pickedFileHandler}
                        >
                            Joindre le fichier
                        </button>
                    </div>
                )}
            </div>
            <div>
                {previewURL && (
                    <div className="center">
                        <button
                            className="file-upload-button"
                            onClick={pickedFileHandler}
                        >
                            Joindre le fichier
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FileContact;

/*
import React, { useState } from 'react';
import { storage } from '../firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function FileContact() {
    const [progress, setProgress] = useState(0);

    const handleSubmitFile = (e) => {
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
            <form onSubmit={handleSubmitFile}>
                <input
                    className="contact-file"
                    type="file"
                    title="Vous pouvez joindre un fichier si vous le souhaitez."
                    name="picture"
                />
                <button>Valider</button>
            </form>
            <h3>Chargement {progress} %</h3>
        </div>
    );
}

export default FileContact;

*/
