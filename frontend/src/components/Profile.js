import './styles/profile.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Popup from './PopUp';

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
            user_id: localStorage.getItem('user_id')
        })
    
        .then((response) => {
            console.log(response.data.users[0])
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
                    description: description.current.value,
                })
                .then(() => {
                    name.current.value = 0
                    email.current.value = 0
                    element.current.value = 0
                    description.current.value = 0
                    country.current.value = 0
                    city.current.value = 0
                    job_title.current.value = 0
                })
            }
        }

        return (
            <div>
                <Navbar />
                <div className='profile-container'>
                    <img src={info.profile_img} className='profile-img'/>
                    <div className='profile-form'>
                        <h1>{info.name}</h1>
                        <h2><strong>points:</strong> {info.points}</h2>
                        <h2><strong>email:</strong> {info.email}</h2>
                        <h2><strong>job title:</strong> {info.job_title}</h2>
                    </div>
                </div>
                <button onClick={togglePopup}>Edit Profile</button>
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
                            <Button text={'Done'} onClick={edit}/>
                            
                        </div>
                        
                    </>}
                    handleClose={togglePopup}
                    />}
            </div>
        )

};
export default Profile;