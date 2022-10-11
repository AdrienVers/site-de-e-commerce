import { useRef, useState, useEffect } from 'react';
import { data } from '../firebase-config';
import { storage } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import styled from 'styled-components';

const ContactGlobal = styled.div`
    display: flex;
    justify-content: center;
    align-items: top;
    background-color: rgb(240, 240, 240);

    h1 {
        margin: 30px 0px 30px 0px;
    }

    @media (max-width: 1050px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(240, 240, 240);
        flex-direction: column;
    }
`;

const ContactInput = styled.div`
    background-color: antiquewhite;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;

    @media (max-width: 1050px) {
        width: 100%;
    }
`;

const ContactInformation = styled.div`
    height: 100%;
    background-color: rgb(240, 240, 240);
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;

    ul {
        text-align: left;
        list-style: none;
        padding-left: 25px;
    }

    li {
        line-height: 22px;
    }

    @media (max-width: 1050px) {
        width: 100%;
    }
`;

const ContactTitle = styled.div`
    min-height: 100px;
`;

const ContactForm = styled.div`
    background-color: rgb(240, 240, 240);
    height: 90%;
    padding: 50px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    box-shadow: 1px 1px 12px #555;

    div {
        width: 100%;
    }

    input:nth-child(1),
    input:nth-child(3),
    input:nth-child(5) {
        height: 40px;
        padding-left: 5px;
        width: 90%;
    }

    input:nth-child(7) {
        height: 80px;
        padding: 0px 0px 40px 5px;
        width: 90%;
    }
`;

const ContactGrid = styled.div`
    background-color: white;
    font-size: 1.2rem;
    padding: 50px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    box-shadow: 1px 1px 12px #555;
`;

const ContactSubmitButton = styled.button`
    padding: 5px 10px 5px 10px;
    font-size: 1.2rem;

    &:hover {
        cursor: pointer;
    }
`;

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
        <ContactGlobal>
            <ContactInput>
                <ContactTitle>
                    <h1>Formulaire de contact</h1>
                </ContactTitle>
                <ContactForm>
                    <input
                        placeholder="Votre nom"
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>
                    <br />
                    <input
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
                            <br />
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
                    <ContactSubmitButton onClick={upload}>
                        Envoyer
                    </ContactSubmitButton>
                    <br />
                    {progress === 100 ? (
                        <p>Votre message a bien été envoyé !</p>
                    ) : null}
                </ContactForm>
            </ContactInput>
            <ContactInformation>
                <ContactTitle>
                    <h1>Informations pratiques</h1>
                </ContactTitle>
                <ContactGrid>
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
                </ContactGrid>
            </ContactInformation>
        </ContactGlobal>
    );
}

export default Contact;
