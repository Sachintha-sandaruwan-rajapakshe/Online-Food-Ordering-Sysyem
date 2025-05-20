import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: '',
  password: ''
}

const handleSubmit = (values) => {
  console.log(values)
  // handle login logic here
}


  

const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Register
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
              <Button onClick={() => navigate("/account/login")}>login</Button>
            </Typography>
          </>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm
