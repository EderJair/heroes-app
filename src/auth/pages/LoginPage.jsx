import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {


  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const {username, onInputChange} = useForm({username: ''})


  const onLogin = (e) => {
    e.preventDefault()
    if(username.trim().length <= 2) return;


    const lastpath = localStorage.getItem('lastpath')

    login(username)

    navigate(lastpath, {
      replace: true
    })
  }


  return (
    <div className='container mt-5 text-center'>
    
      <h1 className=''>Login</h1>
      <hr />

      <form>
        <input 
          type="text" 
          className='form-control' 
          placeholder='Username'
          name='username'
          autoComplete='off'
          value={username}
          onChange={onInputChange}
        />
        <button className='btn btn-success mt-5'
          onClick={onLogin}>
            Login
        </button>
      </form>

      
  

    




    </div>
  )
}
