import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/nav/Nav'
import { selectUser } from '../features/userSlice'
import './Profile.css'
import {auth} from '../firebase';
import Plan from './Plan'
import { useNavigate } from 'react-router-dom'

const prodData = [
    {name:"Premiun",description:"4K HDR",active:"true"},
    {name:"Basic",description:"720 p"},
    {name:"Standard",description:"1080 p"}
]

const Profile = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate
  return (
    <div className='profile'>
       <Nav />
       <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            <div className="profile_details">
                <h2>{user.email}</h2>
                <div className="profile_plans">
                     <h3>Plans: Premium</h3>
                     <Plan data={prodData} />
                    <button onClick={()=>auth.signOut()} className='profile_signOut'>Sign Out</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Profile
