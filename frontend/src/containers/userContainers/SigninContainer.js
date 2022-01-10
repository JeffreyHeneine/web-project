import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/userActions';

const SigninContainer = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { userInfo } = useSelector(state => state.user);
  // const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  async function loginUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login' , {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await response.json()
    if(data.user){
      localStorage.setItem('token', data.user)
      alert('Login successfull')
      window.location.href = '/'
      
    } else{
      alert('Please check username and/or password')
    }
    console.log(data)
  }



  // const submitHandler = event => {
  //   event.preventDefault();
  //   dispatch(signin(email, password));
  // };

  return (
    <div className='form'>
      <form onSubmit={loginUser}>
        <ul className='form-container'>
          <li>
            <h2>Sign-In</h2>
        
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input 
            value= {email}
            type='email' 
            name='email' 
            id='email' 
            onChange={e => setEmail(e.target.value)} />
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input 
            value={password}
            type='password' 
            id='password'
             name='password' 
             onChange={e => setPassword(e.target.value)} />
          </li>
          <li>
            <button onClick={loginUser} type='submit' className='button primary'>
              Sign In
            </button>
          </li>
          
          <li>New to P&O-Commerce ? </li>
          <li>
            <Link
              to='/register'
              className='button secondary text-center'>
              Create Account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SigninContainer;