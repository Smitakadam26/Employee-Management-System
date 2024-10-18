import React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [admin, setAdmins] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    AdminRecords();
  }, [])
  const AdminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result => {
      if(result.data.Status) {
        setAdmins(result.data.Result)
      } else {
         alert(result.data.Error)
      }
    })
  }
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then(result => {
      if(result.data.Status) { 
        localStorage.removeItem("valid")
        navigate('/')
      }
    })
  }
  return (
    <div >
        
        <div className='d-flex justify-content-center flex-column align-items-center mt-5'>
           
            <div className='d-flex align-items-center flex-column mt-5'>
            <table className='table admindetails'>
            <tbody>
              <tr className=' admindetails'>
                <th>Name</th>
                {admin.map((a) => <td key={`name-${a.id}`}>{a.name}</td>)}
              </tr>
              <tr className=' admindetails'>
                <th>Email</th>
                {admin.map((a) => <td key={`email-${a.id}`}>{a.email}</td>)}
              </tr>
              <tr className=' admindetails'>
                <th>Date of Birth</th>
                {admin.map((a) => <td key={`dob-${a.id}`}>{a.dateofbirth}</td>)}
              </tr>
              <tr className='admindetails'>
                <th>Contact No</th>
                {admin.map((a) => <td key={`contact-${a.id}`}>{a.contact_no}</td>)}
              </tr>
            </tbody>
          </table>
          <button type="button" className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
            </div>
        </div>
    </div>
  )
}

export default Profile