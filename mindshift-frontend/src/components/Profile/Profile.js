import './profile.css'
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Popup from '../PopUp/PopUp';
import ChatBot from '../ChatBot/ChatBot';

const Profile = () => {
    const name = useRef(null)
    const email = useRef(null)
    const element = useRef(null)
    const job_title = useRef(null)
    const country = useRef(null)
    const city = useRef(null)
    const description = useRef(null)
    var s;
    
    function encode() {
      var file = element.current.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        s = reader.result;
      };
      reader.readAsDataURL(file);
    }

    const [info, setInfo] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/users/get_user", {
            user_id: localStorage.getItem('user_id')},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        })
    
        .then((response) => {
            const s = response.data.users[0]
            setInfo(s)
        });
        }, []);

        function edit(){
            if( !name.current.value || !email.current.value|| !description.current.value || !element.current.value || !country.current.value || !city.current.value || !job_title.current.value){
                alert("All fields should be filled")
            }else{
                axios
                .post("http://127.0.0.1:8000/api/v1/users/edit_user", {
                    user_id: localStorage.getItem('user_id'),
                    name: name.current.value,
                    email:email.current.value,
                    country: country.current.value,
                    city: city.current.value,
                    job_title: job_title.current.value,
                    profile_img: s,
                    description: description.current.value},{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: 'application/json'
                    }
                })
                .then(() => {
                    name.current.value = ''
                    email.current.value = ''
                    element.current.value = ''
                    description.current.value = ''
                    country.current.value = ''
                    city.current.value = ''
                    job_title.current.value = ''
                    document.window.reload()
                })
            }
        }

        return (
            <div className='profile'>
                <Navbar />
                <ChatBot />
                <div className='profile-container'>
                    <div className='image-container'>
                        <img src={info.profile_img} className='profile-img'/>
                        <button className='edit-profile-button' onClick={togglePopup}>Edit Profile</button>
                    </div>
                    <div className='profile-form'>
                        <h1>{info.name}</h1>
                        <h2><strong>Points:</strong> {info.points}</h2>
                        <h2><strong>Email:</strong> {info.email}</h2>
                        <h2><strong>Position:</strong> {info.job_title}</h2>
                        <h2><strong>Description:</strong> {info.description}</h2>
                        <h2><strong>Country:</strong> {info.country}</h2>
                        <h2><strong>City:</strong> {info.city}</h2>
                    </div>
                </div>
                {isOpen && <Popup
                    content={<>
                        <b>Edit Profile</b>
                        <div className='edit-profile'>
                            <input ref={element} type="file" onChange={() => {encode();}}/>
                            <input ref={name} type="text" placeholder="Name"/>
                            <input ref={email} type="text" placeholder="Email"/>
                            <input ref={country} type="text" placeholder="Country"/>
                            <input ref={city} type="text" placeholder="City"/>
                            <input ref={description} type="text" placeholder="Description"/>
                            <input ref={job_title} type="text" placeholder="Position"/>
                            <Button className={'edit-button'} text={'Done'} onClick={edit}/>
                            
                        </div>
                        
                    </>}
                    handleClose={togglePopup}
                    />}
            </div>
        )

};
export default Profile;