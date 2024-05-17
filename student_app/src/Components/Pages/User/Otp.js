import axios from 'axios'
import React from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Otp() {
    const{handleSubmit, register}  = useForm()
    const navi = useNavigate()

    function saveData(data){
        axios.post('http://127.0.0.1:8000/auth1/otp/', data)
        alert('please check your email for otp')
        navi('/Signup')
    }
  return (
    <div className='m-auto col-6 mt-5 p-3 border border-3'>
    <form onSubmit={handleSubmit(saveData)}>
        <label htmlFor='email' name='email' id='email'></label>
        <input type='email' name='email' id='email' {...register('email')}/>
        <br></br>
        <input type ='submit' className='btn btn-primary'/>
        <input type='reset' className='btn btn-primary'/>
    </form>
    </div>
  )
}

export default Otp