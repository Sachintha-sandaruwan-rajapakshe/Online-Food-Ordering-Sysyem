import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'

const initialValues = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginUser({userData:values,navigate}));
  
}

  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {() => (
          <>
            <Form>
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
                margin="normal"
              />

              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                margin="normal"
              />

              <Button sx={{ mt: 2 }} variant='contained' fullWidth type='submit'>
                Login
              </Button>
            </Form>

            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
              Don't have an account?{' '}
              <Button onClick={() => navigate("/account/register")}>Register</Button>
            </Typography>
          </>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
