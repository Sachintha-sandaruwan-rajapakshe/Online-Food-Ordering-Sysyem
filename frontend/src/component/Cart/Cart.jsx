import { Divider } from '@mui/material';
import React from 'react';
import CartItem from './CartItem';
import AddressCard from './AddressCard';

const items = [1, 1];

const Cart = () => {
  return (
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
              <AddressCard/>
              {[1,1,1].map((items)=> <AddressCard/>)}
            </div>
          </div>
        </section>
    </main>
  );
};

export default Cart;
