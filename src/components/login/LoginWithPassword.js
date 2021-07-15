import React, { useState } from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import './LoginPage.css'
import { Link } from 'react-router-dom'

const LogInWithPassword = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const setInitErrorState = () => {
    setEmailError('')
    setPasswordError('')
  }

  const validateEmail = (email) => {
    const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    if (!regex.test(email)) {
      return false
    }
    return true
  }

  const formValidator = () => {
    let emailError = ''
    let passwordError = ''

    if (email.trim().length === 0) {
      emailError = 'Email is Required!'
    } else if (email && !validateEmail(email.trim())) {
      emailError = 'Inalid Email ID'
    } else if (email && validateEmail(email.trim()) && password.length < 8) {
      passwordError = 'Invalid Credentials!'
    }

    if (password.length === 0) {
      passwordError = 'Password is Required!'
    }

    if (emailError || passwordError) {
      setEmailError(emailError)
      setPasswordError(passwordError)
      return false
    }
    return true
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const isValid = formValidator()
    if (isValid) {
      setInitErrorState()
      localStorage.setItem('loginStatus', true)
      history.push('/dashboard')
    }
  }

  return (
    <div>
      <Card style={{ width: '22rem', marginTop: '2rem' }}>
        <Card.Body>
          <h1 style={{ textAlign: 'center' }} className='primary-color'>
            Login
          </h1>
          <hr />
          <Form onSubmit={submitHandler}>
            <Form.Group className='mt-2'>
              <Form.Control
                type='text'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <div className='error'>{emailError}</div>
            <Form.Group className='mt-3'>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className='error'>{passwordError}</div>
            <div className='mt-3'>
              <Card.Link href='#' className='primary-color'>
                Login With OTP
              </Card.Link>
              <Card.Link href='#' className='primary-color'>
                Forgot Password
              </Card.Link>
            </div>
            <hr />
            <div style={{ textAlign: 'center' }} className='mt-3'>
              Don't have an account?{' '}
              <Link to='/register' className='primary-color'>
                Sign Up
              </Link>
            </div>

            <Button type='submit' className='mt-3 px-5 btn-primary'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LogInWithPassword