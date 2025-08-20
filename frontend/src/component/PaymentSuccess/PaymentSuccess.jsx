import React from 'react'
import { useNavigate } from 'react-router-dom'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { green } from '@mui/material/colors';
import { Button, Card } from '@mui/material';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-5 bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <Card className="w-full lg:w-1/3 flex flex-col items-center bg-gray-800 p-9 text-center rounded-2xl shadow-lg">
          <TaskAltIcon sx={{ fontSize: "5rem", color: green[500] }} />
          <h1 className="py-5 text-2xl font-semibold">Order Success</h1>
          <p>Thank you for choosing our restaurant! We appreciate your order.</p>
          <p className="py-2 text-center text-gray-300 text-lg">Have a great day!</p>

          <Button 
            onClick={() => navigate("/")} 
            variant="contained"  
            sx={{ margin: "1rem 0rem" }}
          >
            Go To Home
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default PaymentSuccess
