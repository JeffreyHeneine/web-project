import React, { useState } from 'react';
//import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom"

const RegisterContainer = props => {
  const history = useHistory()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConformation] = useState('');

  //const { userInfo } = useSelector(state => state.user);
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  // useEffect(() => {
  //   // if (userInfo) {
  //   //   props.history.push(redirect);
  //   // }
  //   return () => {
  //     //
  //   };
  // }, [userInfo, props.history, redirect]);

  async function handleSubmit(event){
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register' , {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
      }),
    })
    const data = await response.json()

    if (data.status === 'ok') {
      history.push('/')
    }
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <ul className='form-container'>
          <li>
            <h2>Create An Account</h2>
          </li>
          <li>
            <label htmlFor='first_name'>First Name</label>
            <input
              type='first_name'
              value ={firstName}
              required
              name='first_name'
              id='first_name'
              onChange={e => setFirstName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor='last_name'>Last Name</label>
            <input
              type='last_name'
              value ={lastName}
              required
              name='last_name'
              id='last_name'
              onChange={e => setLastName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input 
            type='email'
            value ={email} 
            required 
            name='email' 
            id='email' 
            onChange={e => setEmail(e.target.value)} />
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input 
            type='password' 
            value ={password}
            required id='password' 
            name='password' 
            onChange={e => setPassword(e.target.value)} />
          </li>
          <li>
            <label htmlFor='password_confirmation'>Password Confirmation</label>
            <input
              type='password'
              value ={passwordConfirmation}
              required
              id='password_confirmation'
              name='password_confirmation'
              onChange={e => setPasswordConformation(e.target.value)}
            />
          </li>
          <li>
            <button type='submit' className='button primary'>
              Register
            </button>
          </li>
          <li>Already have an account?</li>
          <li>
            <Link
              to={redirect === '/' ? 'signin' : 'signin?redirect=' + redirect}
              className='button secondary text-center'>
              Sign In
            </Link> 
          </li>
        </ul>
      </form>
    </div>
  );
};

export default RegisterContainer;