import { useRef, useState, useEffect } from 'react';
import { data } from '../firebase-config';
import { storage } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [image, setImage] = useState('');
    const [URL, setURL] = useState('');
    const [preview, setPreview] = useState();
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    const upload = () => {
        if (image == null) return;
        setURL('Getting URL link');

        const storageRef = ref(storage, '/images/' + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image);
        const userCollection = collection(data, 'contactData');

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
                getDownloadURL(uploadTask.snapshot.ref).then(
                    (url) =>
                        addDoc(userCollection, {
                            name: name,
                            email: email,
                            phone: phone,
                            comment: comment,
                            url: url,
                        }).then(alert('Votre message a bien été envoyé !')),

                    setName(''),
                    setEmail(''),
                    setPhone(''),
                    setComment(''),
                    setURL(''),
                    setPreview(null)
                );
            }
        );
    };

    return (
        <div className="contact-global">
            <div className="contact-input">
                <div className="contact-title">
                    <h1>Formulaire de contact</h1>
                </div>
                <div className="contact-form">
                    <input
                        className="contact-name"
                        placeholder="Votre nom"
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>
                    <br />
                    <input
                        className="contact-email"
                        type="email"
                        placeholder="Votre adresse mail"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    ></input>
                    <br />
                    <input
                        className="contact-phone"
                        type="text"
                        placeholder="Votre numéro de téléphone"
                        name="phone"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    ></input>
                    <br />
                    <input
                        className="contact-message"
                        type="text"
                        placeholder="Votre message..."
                        name="comment"
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                    ></input>
                    <br />
                    <button
                        onChange={setURL}
                        onClick={(event) => {
                            event.preventDefault();
                            fileInputRef.current.click();
                        }}
                    >
                        Ajouter un fichier
                    </button>
                    {image ? (
                        <p>
                            <img
                                src={preview}
                                style={{ objectFit: 'cover', height: '80px' }}
                                alt=""
                            />
                            <a href={URL}>{URL}</a>
                        </p>
                    ) : null}
                    <br />
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}
                    ></input>
                    <button onClick={upload} className="contact-submit-button">
                        Envoyer
                    </button>
                    <br />
                    {progress === 100 ? (
                        <p>Votre message a bien été envoyé !</p>
                    ) : null}
                </div>
            </div>
            <div className="contact-information">
                <div className="contact-title">
                    <h1>Informations pratiques</h1>
                </div>
                <div className="contact-grid">
                    <p>
                        <strong>Adresse du Normand Voyagageur :</strong>
                    </p>
                    <br />
                    <p>92 Rue de la Falaise, Luc-sur-Mer (14530)</p>
                    <br />
                    <p>
                        <strong>Téléphone</strong> : 02 39 54 14 14
                    </p>
                    <br />
                    <p>
                        <strong>Adresse mail</strong> : contact@nv.fr
                    </p>
                    <br />
                    <br />
                    <p>
                        <strong>Horaires d'ouverture</strong> :
                    </p>
                    <br />

                    <ul>
                        <li>Lundi : 12:00–20:45,</li>
                        <li>Mardi : Fermé,</li>
                        <li>Mercredi : Fermé,</li>
                        <li>Jeudi : 12:00–20:45,</li>
                        <li>Vendredi : 12:00–22:00,</li>
                        <li>Samedi : 12:00–22:00,</li>
                        <li>Dimanche : 12:00–20:45.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
