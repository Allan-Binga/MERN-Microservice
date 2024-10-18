import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:'',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      });
      if(data.error) {
        toast.error(data.error)
      } else{
        setData({});
        toast.success('Login successful, welcome!')
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }
  return (
    <div className="login-container">
  <form onSubmit={loginUser}>
    <div className="form-row">
      <label htmlFor="emailInput">Email</label>
      <input id="emailInput" type="email" placeholder="iamjohndoe@gmail.com" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
    </div>
    <div className="form-row">
      <label htmlFor="passwordInput">Password</label>
      <input id="passwordInput" type="password" placeholder="Enter password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
    </div>
    <button id="loginBtn" type="submit">Login</button>
  </form>
</div>

  )
}
