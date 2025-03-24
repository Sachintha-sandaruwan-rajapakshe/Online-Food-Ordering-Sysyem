import { Box, Button, Card, Divider, Grid, Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import CartItem from './CartItem';
import AddressCard from './AddressCard';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline:'none',
  boxShadow: 24,
  p: 4,
};

const initialValues={
  streetAddress:'',
  state:'',
  pincode:'',
  city:''
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street Address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().matches(/^\d{5,6}$/, "Invalid Pincode").required("Pincode is required"),
  city: Yup.string().required("City is required")
});

const handleSubmit = (values) => {
  console.log('Form values:', values);
};
const items = [1, 1];

const Cart = () => {
  const createOrderUsingSelectedAddress=(selectedAddress)=>{
    console.log("Selected Address:", selectedAddress);
  };
  const handleOpenAddressModel=()=>setOpen(true);;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
    <main className="lg:flex justify-between min-h-screen"> 
      <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
        <CartItem />
        {items.map((item, index) => (
          <CartItem key={index} />
        ))}
        <Divider />
        <div className="billDetails px-5 text-sm">
          <p className="font-extralight py-5">Bill Details</p>
          <div className="flex justify-between text-gray-400">
            <p>Item Total</p>
            <p>Rs.200.00</p>
          </div>
          <div className="flex justify-between text-gray-400">
            <p>Delivery Fee</p>
            <p>Rs.20.00</p>
          </div>
          <div className="flex justify-between text-gray-400">
            <p>Platform Fee</p>
            <p>Rs.2.00</p>
          </div>
          <div className="flex justify-between text-gray-400">
            <p>GST and Restaurant Charges</p>
            <p>Rs.50.00</p>
          </div>
          <Divider />
          <div className="flex justify-between pt-5 pb-2">
            <p>Total Pay</p>
            <p>Rs.272.00</p>
          </div>
        </div>
      </section>
        <Divider orientation="vertical" flexItem />
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'> 
          <div>
            <h1 className='pt-10 text-2xl'>Choose Delivary Address</h1> 
            <div className='flex gap-5 flex-wrap justify-center'>
              {[1,2,3].map((item)=> <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />)}
              <Card className='flex gap-5 w-64 p-5'>
                      <AddLocationAltIcon/>
                      <div className='space-y-3 text-gray-500'>
                          <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                          <Button variant="outlined" fullWidth onClick={handleOpenAddressModel}>Add</Button>
                      </div>
                  </Card>
            </div>
          </div>
        </section>
    </main>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(handleSubmit)}
      >{/* npm i formik  / npm i yup [for validation]*/}
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={2}>
                {/* Street Address Field */}
                <Grid item xs={12}>
                  <Field 
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                    error={Boolean(errors.streetAddress && touched.streetAddress)}
                    helperText={<ErrorMessage name="streetAddress" component="span" className="text-red-600" />}
                  />
                </Grid>

                {/* State Field */}
                <Grid item xs={6}>
                  <Field 
                    as={TextField}
                    name="state"
                    label="State"
                    fullWidth
                    variant="outlined"
                    error={Boolean(errors.state && touched.state)}
                    helperText={<ErrorMessage name="state" component="span" className="text-red-600" />}
                  />
                </Grid>

                {/* Pincode Field */}
                <Grid item xs={6}>
                  <Field 
                    as={TextField}
                    name="pincode"
                    label="Pincode"
                    fullWidth
                    variant="outlined"
                    error={Boolean(errors.pincode && touched.pincode)}
                    helperText={<ErrorMessage name="pincode" component="span" className="text-red-600" />}
                  />
                </Grid>

                {/* City Field */}
                <Grid item xs={12}>
                  <Field 
                    as={TextField}
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                    error={Boolean(errors.city && touched.city)}
                    helperText={<ErrorMessage name="city" component="span" className="text-red-600" />}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>Save Address</Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

      </Box>
    </Modal>
    </>
  );
};

export default Cart;
