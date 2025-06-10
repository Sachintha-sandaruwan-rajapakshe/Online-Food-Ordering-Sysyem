import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action'

const initialValues = {
  fullName:'',
  email: '',
  password: '',
  role:'ROLE_CUSTOMER'
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(registerUser({userData:values,navigate}))
 
}
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
                name="fullName"
                label="full Name"
                fullWidth
                variant="outlined"
                margin="normal"
              />

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
               <FormControl fullWidth sx={{minWidth: 80 }} margin="normal" >
                  <InputLabel id="role-simple-select-autowidth-label">Role</InputLabel>
                  <Field
                    as={Select}
                    labelId="role-simple-select-autowidth-label"
                    id="role-simple-select-autowidth"
                    name="role"
                    label="Role"

                  >
                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                    <MenuItem value={"ROLE_RESTAURENT_OWNER"}>Restaurant Owner</MenuItem>
                  </Field>
                </FormControl>


              <Button sx={{ mt: 2 }} variant='contained' fullWidth type='submit'>
                Register
              </Button>
            </Form>

            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
              If you alredy have an account ?{' '}
              <Button onClick={() => navigate("/account/login")}>login</Button>
            </Typography>
          </>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm
