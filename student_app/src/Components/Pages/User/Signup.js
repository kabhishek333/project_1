import React from 'react'
import axios from 'axios'
import{useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const {handleSubmit, register} = useForm()

  const navi = useNavigate
  function saveData(data){
    axios.post('http://127.0.0.1:8000/auth1/user/',data)
    alert('account is activated.')
    navi('/Show')
  }
 return (
    <div className='border border-3 m-auto col-6'>
      <center>
        <h3>SIGNUP PAGE</h3>
        <form onSubmit={handleSubmit(saveData)}>
          <label htmlFor='email'>ENTER USERNAME:</label>
          <input type='text' id='email' name='email' {...register('email')}/>
          <br></br>
          <label htmlFor='otp'>ENTER OTP:</label>
          <input type='text' id='otp' name= 'otp' {...register('otp')}/>
          <br></br>
          <label htmlFor='password'>ENTER PASSWORD:</label>
          <input type='text' id='password' name='password'{...register('password')}/>
          <br></br>
          <button type='submit' className='btn btn-outline-success col-6 btn-lg'>SUBMIT</button>
          <button type='reset' className='btn btn-outline-warning col-6 btn-lg'>RESET</button>
        </form>
      </center>
    </div>
  )
}

export default Signup